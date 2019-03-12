<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'user_id', 'category', 'caption', 'mime_type', 'resolution', 'size', 'slug', 'checksum'
    ];

    public function photographer()
    {
        return $this->belongsTo('App\Photographer');
    }

    public function keywords()
    {
        return $this->belongsToMany('App\Keyword')->withPivot('ImageKeyword');
    }
}
