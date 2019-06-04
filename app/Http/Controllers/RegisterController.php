<?php

namespace App\Http\Controllers;

use App\User;
use App\Photographer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    use RegistersUsers;

    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function validationRules()
    {
        return [
            'username' => 'required|string|max:255|unique:users',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ];
    }

    protected function create(array $data)
    {
        $user = User::create([
            'username' => $data['username'],
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), $this->validationRules());

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'success' => false
            ]);
        }
        else {
            $user = $this->create($request->all());
            event(new Registered($user));
            $user = User::where('username', $request->input('username'))->first();
            $photographer = Photographer::create([
                'user_id' => $user->id
            ]);
            return response()->json([
                'user' => $user,
                'success' => true
            ]);
        }
    }
}
