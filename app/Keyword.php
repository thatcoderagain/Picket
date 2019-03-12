<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    protected $fillable = [
        'keyword'
    ];

    public function images()
    {
        return $this->belongsToMany('App\Keyword')->withPivot('ImageKeyword');
    }
}
