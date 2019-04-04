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
Route::get('/sql', 'ImagesController@fetchAll'
    // function () {
    //
    // }
);


















/**
 * Payment Gateway ROUTES
 */
Route::post('/make-payment', 'PaymentsController@payWithpaypal');
Route::get('/payment-status', 'PaymentsController@getPaymentStatus');

/**
 * VUE APP ROUTE
 */
Route::view('/{path?}', 'picket');
