<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hash;
use Validator;
use Intervention;
use App\Models\User;


class UsersController extends Controller
{
    public function fetch(Request $request)
    {
        return User::where('id', auth()->user()->id)
            ->with('photographer')
            ->first();
    }

    function fetchPhotographer(Request $request, $username)
    {
        return User::where('username', $username)
            ->with('photographer')
            ->first();
    }

    public function update(Request $request)
    {
        $rules = [
            // 'username' => 'required|string|max:255|unique:users,id',
            'name' => 'required|string|max:255',
            'password' => 'string|min:6',
            'old_password' => 'string|min:6',
            // 'email' => 'required|string|email|max:255|unique:users',
            'sex' => 'nullable|string|in:male,female,other',
            'dob' => 'nullable|date_format:Y-m-d|before:today|after:1900-01-01',
            'mobile' => 'nullable|digits:10',
            'specialization' => 'nullable|string',
            'location' => 'nullable|string',
            'charges' => 'nullable|numeric',
            'bio' => 'nullable|string',
            // 'image' => 'nullable|file',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'success' => false
            ]);
        }
        else {
            if (strlen($request->input('password'))) {
                if (!Hash::check($request->old_password, auth()->user()->password)) {
                    return response()->json([
                        'errors' => ['old_password' => ['Old password does not match.']],
                        'success' => false
                    ]);
                }

                User::where('id', auth()->user()->id) -> update([
                    'password' => Hash::make($request->password),
                ]);
            }

            User::where('id', auth()->user()->id) -> update([
                'username' => $request->input('username'),
                'name' => $request->input('name'),
            ]);

            auth()->user() -> photographer() -> update([
                'sex' => $request->input('sex'),
                'dob' => $request->input('dob'),
                'mobile' => $request->input('mobile'),
                'specialization' => $request->input('specialization'),
                'location' => $request->input('location'),
                'charges' => $request->input('charges'),
                'bio' => $request->input('bio'),
            ]);

            if ($request->hasFile('image'))
            {
                if ($request->file('image')->isValid())
                {
                    $originalImage = $request->file('image');
                    $extension = $originalImage->getClientOriginalExtension();

                    if (($slug = auth()->user() -> photographer() -> first() -> image) == null)
                    {
                        do {
                            $slug = str_random(24).'.'.$extension;
                        }while(\App\Models\Photographer::where('image', $slug)->first() != null);
                    }
                    $resizedImage = Intervention::make($originalImage);
                    $resizedImage->resize(320, 320);
                    $resizedImage->save(storage_path('/app/public/images/profiles/').$slug);

                    auth()->user() -> photographer() -> update([
                        'image' => $slug
                    ]);
                }
            }

            $user = User::where('id', auth()->user()->id)
                            ->with('photographer')
                            ->first();

            return response()->json([
                'user' => $user,
                'success' => true
            ]);
        }
    }
}
