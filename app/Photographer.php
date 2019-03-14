<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photographer extends Model
{
    protected $fillable = [
        'user_id', 'sex', 'dob', 'mobile'. 'specialization', 'location', 'charges', 'bio', 'image'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function images()
    {
        return $this->hasMany('App\Image');
    }
}
