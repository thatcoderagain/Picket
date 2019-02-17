<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function photographer()
    {
        return $this->belongsTo(App\Photographer::class);
    }

    public function keywords()
    {
        return $this->hasMany(App\Keyword::class);
    }
}
