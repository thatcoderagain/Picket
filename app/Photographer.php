<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photographer extends Model
{
    public function user()
    {
        return $this->belongsTo(App\User::class);
    }

    public function images()
    {
        return $this->hasMany(App\Image::class);
    }
}
