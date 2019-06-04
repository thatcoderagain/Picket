<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'user_id', 'category', 'caption', 'mime_type', 'resolution', 'size', 'slug', 'checksum'
    ];

    protected $hidden = [
        'checksum', 'created_at', 'updated_at'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function keywords()
    {
        return $this->belongsToMany('App\Models\Keyword')->withPivot('keyword_id');
    }

    public function buyer()
    {
        return $this->belongsToMany('App\Models\Image')->withPivot('image_id');
    }
}
