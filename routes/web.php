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

// Auth::routes();
// Route::get('logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/dash', 'HomeController@index')->name('dash');

Route::get('/ankita', function() { return view('ankita'); })->name('ankita');

/**
 * React Routes
 */
Route::view('/login', 'react');
// Route::view('/register', 'react');
Route::view('/profile', 'react');
Route::view('/gallery', 'react');
Route::view('/home', 'react');
