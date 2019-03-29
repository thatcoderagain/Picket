<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    protected $fillable = [
        'keyword'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function images()
    {
        return $this->belongsToMany('App\Keyword')->withPivot('image_id');
    }
}
