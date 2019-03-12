<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * VUE APP ROUTE
 */
Route::view('/{path?}', 'picket');

/**
 * TESTING ROUTE
 */
Route::get('/sql', function() {
    return \App\Image::with('keywords')->where('id', 1)->get();
});

