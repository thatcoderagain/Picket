<?php

/*
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great! ishita
|
*/

Route::get('/', function () {
    // return view('welcome');
    return "Gau";
});

Auth::routes();

Route::get('/home', 'College2Controller@index')->name('college');
