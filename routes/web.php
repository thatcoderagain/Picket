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

<<<<<<< HEAD
Route::get('testing', function () {
    return view('ankita');
});
Route::get('bhoori', function () {
    return view('html');
});

Route::get('h', function () {
    return view('Picket');
});
=======
// Route::view('/{path?}', 'react');
>>>>>>> 3c7b9fba6bba8d2ce9458e2a43a638b34cf75675

Route::view('/', 'react');
Route::view('/profile', 'react');
Route::view('/gallery', 'react');


Route::get('/boot', function (){
    return view('bootstrap');
});
