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
        return $request->all();

        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            'name' => ['required', 'string', 'max:255'],
            'sex' => ['string',
                Rule::in(['male', 'female', 'other']),
            ],
            'dob' => ['date'],
            'mobile' => ['numeric', 'max:10'],
            'specialization' => ['alpha', ''],
            'location' => ['string', ''],
            'charges' => ['string', ''],
            'bio' => ['string', ''],
            'image' => ['file']
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'success' => false
            ]);
        }
        else {
            $user = $this->create($request->all());
            event(new Registered($user));
            return response()->json([
                'user' => $user,
                'success' => true
            ]);
        }

    }
}
