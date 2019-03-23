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
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

// User
Route::post('/user/fetch', 'UsersController@fetch');
Route::post('/user/update', 'UsersController@update');

// Image
Route::post('/upload', 'ImagesController@uploadImage');
Route::post('/fetchAllImages', 'ImagesController@getImages');
Route::post('/fetchCategories', 'ImagesController@getCategories');
Route::post('/fetchImageInfo/{id}', 'ImagesController@getImageInfo');































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
