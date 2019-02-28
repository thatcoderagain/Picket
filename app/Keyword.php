<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    protected $fillable = [
        'keywords'
    ];

    public function images()
    {
        return $this->belongsToMany(App\Image::class);
    }
}
