<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = ['id', 'intent', 'state', 'cart', 'payment_method', 'payer_id', 'status', 'country_code', 'email', 'first_name', 'last_name', 'invoice_number', 'amount', 'currency', 'merchant_id', 'description'
    ];

    public function items()
    {
        return $this->hasMany('App\Item');
    }
}
