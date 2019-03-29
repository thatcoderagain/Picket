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
// Route::get('/sql', function() {
//     return auth()->user()->with('photographer')->first();
//     return \App\User::with('photographer')->where('id', auth()->user()->id)->get();
// });

Route::get('/payment', function () {
    return redirect()->to('/#/payment');
});

Route::post('/make-payment', 'PaymentsController@payWithpaypal');

Route::get('/status', 'PaymentsController@getPaymentStatus');

















/**
 * VUE APP ROUTE
 */
Route::view('/{path?}', 'picket');
