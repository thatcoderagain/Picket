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

Route::Auth();

Route::get('/picket', function () {
    return view('Picket');
});

Route::view('/', 'react');
Route::view('/profile', 'react');
Route::view('/gallery', 'react');
