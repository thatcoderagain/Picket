<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'username', 'name', 'email', 'password',
    ];

    protected $hidden = [
        'email_verified_at', 'password', 'remember_token', 'created_at', 'updated_at'
    ];

    public function photographer()
    {
        return $this->hasOne('App\Photographer');
    }

    public function images()
    {
        return $this->hasMany('App\Image');
    }

    public function purchases()
    {
        return $this->hasMany('App\Purchase');
    }
}
