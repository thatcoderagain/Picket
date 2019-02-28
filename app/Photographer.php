<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photographer extends Model
{
    protected $fillable = [
        'user_id', 'sex', 'dob', 'mobile'. 'specialization', 'location', 'charges'
    ];

    public function user()
    {
        return $this->belongsTo(App\User::class);
    }

    public function images()
    {
        return $this->hasMany(App\Image::class);
    }
}
