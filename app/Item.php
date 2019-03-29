<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'payment_id', 'name', 'price', 'currency', 'quantity'
    ];

    public function payment()
    {
        return $this->belongsTo('App\Payment');
    }
}
