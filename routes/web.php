<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
*/


/**
 * TESTING ROUTE
 */
Route::get('/sql', function() {
    // return \App\User::with('images')->get();
    return \App\Image::with('user')->with('keywords')->where('id', 1)->get();
});


/**
 * VUE APP ROUTE
 */
Route::view('/{path?}', 'picket');
