<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

use PayPal\Api\Amount;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;

use PayPal\Auth\OAuthTokenCredential;
use PayPal\Rest\ApiContext;
use Redirect;
use Session;
use URL;

use App\Image;
use App\User;
use App\Purchase;

class PaymentsController extends Controller
{
    private $_api_context;

    public function __construct()
    {
        $paypal_conf = \Config::get('paypal');
        $this->_api_context = new ApiContext(
            new OAuthTokenCredential(
                $paypal_conf['client_id'],
                $paypal_conf['secret']
            )
        );
        $this->_api_context->setConfig($paypal_conf['settings']);
    }

    public function price(Image $image)
    {
        $resolutions = explode(' x ', $image->resolution);
        return round($resolutions[0]*$resolutions[1]/102400, 2);
    }

    public function purchased()
    {
        return $purchases = auth()->user()->purchases()->get()
            ->map(function($purchase) {
                return $purchase->image_id;
            })->toArray();
    }

    public function payWithpaypal(Request $request)
    {
        \DB::beginTransaction();
        $itemList = new ItemList();
        $items = [];
        $totalAmount = 0;
        $purchases = $this->purchased();
        $images = explode(',', $request->input('items'));
        foreach ($images as $id)
        {
            $image = Image::where('id', $id)->get()->first();
            $totalAmount += $price = $this->price($image);

            if(in_array($image->id, $purchases))
            {
                \DB::rollback();
                Session::put('error', 'Few items in the cart are already purchases');
                return Redirect::to('/');
            }

            Purchase::create([
                'user_id' => auth()->user()->id,
                'image_id' => $image->id,
                'amount' => $price,
            ]);

            $item = new Item();
            $item->setName('('.$image->id.') - '.$image->resolution)
                ->setCurrency('USD')
                ->setQuantity(1)
                ->setPrice($price);
            array_push($items, $item);
        }

        $itemList->setItems($items);

        $amount = new Amount();
        $amount->setCurrency('USD')
            ->setTotal($totalAmount);

        $payer = new Payer();
        $payer->setPaymentMethod('paypal');

        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($itemList)
            ->setDescription('Your transaction description');

        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($itemList)
            ->setDescription("Buy Images")
            ->setInvoiceNumber(uniqid());

        $redirectUrls = new RedirectUrls();
        $redirectUrls
            ->setReturnUrl(URL::to('/status'))
            ->setCancelUrl(URL::to('/status'));

        $payment = new Payment();
        $payment->setIntent('order')
            ->setPayer($payer)
            ->setRedirectUrls($redirectUrls)
            ->setTransactions(array($transaction));

        try {
            $payment->create($this->_api_context);
        }
        catch (\PayPal\Exception\PayPalConnectionException $ex) {
            if (\Config::get('app.debug')) {
                // return $ex->getCode().$ex->getData();
                Session::put('error', 'Transaction failed');
                return Redirect::to('/');
            } else {
                Session::put('error', 'Some error occur, sorry for the inconvenient');
                return Redirect::to('/');
            }
        }

        foreach ($payment->getLinks() as $link) {
            if ($link->getRel() == 'approval_url') {
                $redirect_url = $link->getHref();
                break;
            }
        }

        /** add payment ID to session **/
        Session::put('paypal_payment_id', $payment->getId());
        if (isset($redirect_url)) {
            \DB::commit();
            /** redirect to paypal **/
            return Redirect::away($redirect_url);
        }
        \DB::rollback();
        Session::put('error', 'Unknown error occurred');
        return Redirect::to('/');
    }

    /*STATUS*/
    public function getPaymentStatus()
    {
        $payment_id = Session::get('paypal_payment_id');
        Session::forget('paypal_payment_id');

        if (empty(Input::get('PayerID')) || empty(Input::get('token'))) {
            Purchase::where([
                'user_id' => auth()->user()->id,
                'payment_id' => null
            ])->delete();
            Session::put('error', 'Payment failed');
            return Redirect::to('/');
        }
        $payment = Payment::get($payment_id, $this->_api_context);
        $execution = new PaymentExecution();
        $execution->setPayerId(Input::get('PayerID'));

        /**Execute the payment **/
        $result = $payment->execute($execution, $this->_api_context);

        \DB::beginTransaction();
        \App\Payment::create([
            'id' => $payment_id,
            'intent' => $result->intent,
            'state' => $result->state,
            'cart' => $result->cart,
            'payment_method' => $result->payer->payment_method,
            'status' => $result->payer->status,
            'payer_id' => $result->payer->payer_info->payer_id,
            'country_code' =>$result->payer->payer_info->country_code,
            'email' => $result->payer->payer_info->email,
            'first_name' => $result->payer->payer_info->first_name,
            'last_name' => $result->payer->payer_info->last_name,
            'invoice_number' => $result->transactions[0]->invoice_number,
            'amount' => $result->transactions[0]->amount->total,
            'currency' => $result->transactions[0]->amount->currency,
            'merchant_id' => $result->transactions[0]->payee->merchant_id,
            'description' => $result->transactions[0]->description,
        ]);

        foreach ($result->transactions[0]->item_list->items as $key => $item) {
            \App\Item::create([
                'payment_id' => $payment_id,
                'name' => $item->name,
                'price' => $item->price,
                'currency' => $item->currency,
                'quantity' => $item->quantity,
            ]);
        }

        if ($result->getState() == 'approved') {
            Purchase::where([
                'user_id' => auth()->user()->id,
                'payment_id' => null
            ])->update([
                'payment_id' => $payment->id
            ]);
            \DB::commit();
            Session::put('success', 'Payment success');
            return Redirect::to('/');
        }
        \DB::rollback();

        Purchase::where([
            'user_id' => auth()->user()->id,
            'payment_id' => null
        ])->delete();

        Session::put('error', 'Payment failed');
        return Redirect::to('/');
    }
}
