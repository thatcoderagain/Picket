<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

use PayPal\Api\Amount;
// use PayPal\Api\Details;
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

class PaymentsController extends Controller
{
    private $_api_context;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        /** PayPal api context **/
        $paypal_conf = \Config::get('paypal');
        $this->_api_context = new ApiContext(new OAuthTokenCredential(
            $paypal_conf['client_id'],
            $paypal_conf['secret'])
        );
        $this->_api_context->setConfig($paypal_conf['settings']);
    }

    public function price(Image $image)
    {
        $resolutions = explode(' x ', $image->resolution);
        return round($resolutions[0]*$resolutions[1]/102400, 2);
    }

    public function payWithpaypal(Request $request)
    {
        echo "<pre>";
        $itemList = new ItemList();
        $items = [];
        $totalAmount = 0;
        $images = explode(',', $request->input('items'));
        foreach ($images as $id) {
            $image = Image::where('id', $id)->get()->first();
            $totalAmount += $price = $this->price($image);

            // If image exists and image is not already purchased by the user
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


        // echo "</pre>";
        // dd('stopped!');


        $payer = new Payer();
        $payer->setPaymentMethod('paypal');

        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($itemList)
            ->setDescription('Your transaction description');

        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($itemList)
            ->setDescription("Payment description")
            ->setInvoiceNumber(uniqid());

        $redirectUrls = new RedirectUrls();
        $redirectUrls->setReturnUrl(URL::to('status')) /** Specify return URL **/
            ->setCancelUrl(URL::to('status'));

        $payment = new Payment();
        $payment->setIntent('order')
            ->setPayer($payer)
            ->setRedirectUrls($redirectUrls)
            ->setTransactions(array($transaction));

        try {
            $payment->create($this->_api_context);
        } catch (\PayPal\Exception\PayPalConnectionException $ex) {
            if (\Config::get('app.debug')) {
                // echo $ex->getCode(); // Prints the Error Code
                // echo $ex->getData(); // Prints the detailed error message
                Session::put('error', 'Connection timeout');
                return Redirect::to('/');
            } else {
                Session::put('error', 'Some error occur, sorry for inconvenient');
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
            /** redirect to paypal **/
            return Redirect::away($redirect_url);
        }
        Session::put('error', 'Unknown error occurred');
        return Redirect::to('/');
    }

    public function getPaymentStatus()
    {
        /** Get the payment ID before session clear **/
        $payment_id = Session::get('paypal_payment_id');

        /** clear the session payment ID **/
        Session::forget('paypal_payment_id');
        if (empty(Input::get('PayerID')) || empty(Input::get('token'))) {
            Session::put('error', 'Payment failed');
            return Redirect::to('/payment-status');
        }
        $payment = Payment::get($payment_id, $this->_api_context);
        $execution = new PaymentExecution();
        $execution->setPayerId(Input::get('PayerID'));

        /**Execute the payment **/
        $result = $payment->execute($execution, $this->_api_context);
        if ($result->getState() == 'approved') {
            Session::put('success', 'Payment success');
            return Redirect::to('/payment-status');
        }
        Session::put('error', 'Payment failed');
        return Redirect::to('/payment-status');
    }
}
