<?php

use Illuminate\Http\Request;

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

Auth::routes();
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
Route::post('/upload', 'ImagesController@uploadImage');
Route::post('/fetchImages', 'ImagesController@getImages');
Route::post('/fetchCategories', 'ImagesController@getCategories');
Route::post('/fetchImageInfo/{id}', 'ImagesController@getImageInfo');
Route::post('/editProfile', 'UsersController@userInfo');

