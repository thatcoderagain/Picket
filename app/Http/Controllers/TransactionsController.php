<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;
use App\Models\Purchase;

class TransactionsController extends Controller
{
    function __construct()
    {
        $this->middleware('jwt');
    }

    function transactions()
    {
        return Purchase::select(['payment_id', 'updated_at'])->groupBy(['payment_id', 'updated_at'])->orderBy('updated_at', 'desc')->get();
    }

    function transaction($id)
    {
        return Purchase::where('payment_id', $id)->with('image')->with('user')->get();
    }
}
