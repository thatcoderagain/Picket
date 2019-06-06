<?php

// Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
// Route::post('/login', 'Auth\LoginController@login')->name('login');
// Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
// Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
// Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
// Route::get('/password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
// Route::post('/password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
// Route::get('/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
// Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
// Route::post('/register', 'Auth\RegisterController@register')->name('register');

/**
POST        /user/fetch/{user}          fetch           users.fetch
POST        /users/store/{user}         store           users.store
POST        /users/update/{user}        update          users.update
POST        /users/delete/{user}        destroy         photos.destroy
**/

use Illuminate\Http\Request;

Route::group([
        'prefix' => 'auth'
    ], function () {
        Route::post('login', 'JWTAuthController@login');
        Route::post('logout', 'JWTAuthController@logout');
        Route::post('refresh', 'JWTAuthController@refresh');
        Route::post('payload', 'JWTAuthController@payload');
        Route::post('me', 'JWTAuthController@me');
        Route::post('register', 'RegisterController@register');
    }
);

Route::group([
        'prefix' => 'user'
    ], function () {
        Route::post('fetch', 'UsersController@fetch');
        Route::post('fetch/{username}', 'UsersController@fetchPhotographer');
        Route::post('update', 'UsersController@update');
    }
);

Route::group([
        'prefix' => 'image'
    ], function () {
        Route::post('categories/fetch', 'ImagesController@categories');
        Route::post('store', 'ImagesController@store');

        Route::post('fetch-all', 'ImagesController@fetchAll');
        Route::post('fetch-purchased', 'ImagesController@purchased');
        Route::post('fetch-unpurchased', 'ImagesController@unpurchased');
        Route::post('fetch/{id}', 'ImagesController@fetch');
        Route::post('download/{id}', 'ImagesController@download');
    }
);

// Search
Route::post('/search/images', function(Request $request) {
    $query = $request->input('query');
    $result = \App\Image::with('user')->with('keywords')->where('category', 'like', $query)->get();
    dd($result);
    return json_encode(['result' => '']);
});






























/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
