<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'user_id', 'category', 'meme_type', 'resolution'. 'size', 'slug'
    ];

    public function photographer()
    {
        return $this->belongsTo(App\Photographer::class);
    }

    public function keywords()
    {
        return $this->hasMany(App\Keyword::class);
    }
}
