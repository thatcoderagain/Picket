<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    public function images()
    {
        return $this->belongsToMany(App\Image::class);
    }
}
