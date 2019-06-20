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
 * CLEAR CACHE
 */
Route::get('/clear-cache', function() {
    Artisan::call('cache:clear');
    return "Cache is cleared";
});
/**
 * Payment Gateway ROUTES
 */
Route::post('/make-payment', 'PaymentsController@payWithpaypal');
Route::get('/payment-status', 'PaymentsController@getPaymentStatus');
/**
 * VUE APP ROUTE
 */
Route::view('/{path?}', 'picket');
