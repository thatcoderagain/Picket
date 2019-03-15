<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    public function fetch(Request $request)
    {
        return auth()
            ->user()
            ->with('photographer')
            ->first();
    }

    public function update(Request $request)
    {
        return (string)(bool)(!empty($request->input('bio') == null));
    }
}
