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

Route::get('/payment', function () {
    return redirect()->to('/#/payment');
});

Route::post('/make-payment', 'PaymentController@payWithpaypal')->name('make-payment');

Route::get('/status', 'PaymentController@getPaymentStatus')->name('status');

Route::get('/payment-status', function() {
    return view('payment-status');
})->name('status');


/**
 * VUE APP ROUTE
 */
Route::view('/{path?}', 'picket');
