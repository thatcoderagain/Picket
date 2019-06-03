<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $fillable = [
        'username', 'name', 'email', 'password',
    ];

    protected $hidden = [
        'email_verified_at', 'password', 'remember_token', 'created_at', 'updated_at'
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

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
