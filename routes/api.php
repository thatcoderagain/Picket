<?php

use Illuminate\Http\Request;

/**
    POST        /user/fetch/{user}          fetch           users.fetch
    POST        /users/store/{user}         store           users.store
    POST        /users/update/{user}        update          users.update
    POST        /users/delete/{user}        destroy         photos.destroy
**/

// Auth
Auth::routes();
Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login')->name('login');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('/password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('/password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
Route::get('/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('/register', 'Auth\RegisterController@register')->name('register');


// User
Route::post('/user/fetch', 'UsersController@fetch');
Route::post('/user/fetch/{username}', 'UsersController@fetch');
Route::post('/user/update', 'UsersController@update');

// Image
Route::post('/categories/fetch', 'ImagesController@categories');
Route::post('/image/store', 'ImagesController@store');

Route::post('/image/fetch-all', 'ImagesController@fetchAll');
Route::post('/image/fetch-purchased', 'ImagesController@purchased');
Route::post('/image/fetch-unpurchased', 'ImagesController@unpurchased');
Route::post('/image/fetch/{id}', 'ImagesController@fetch');































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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
