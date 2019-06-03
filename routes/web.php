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
Route::get('/test', //'ImagesController@fetchAll'
    function () {

    }
);

Route::get('/compress/{image}', function (Request $request, $image) {
        $originalImage = Intervention::make(storage_path('app/public/categories/'.$image));
        $originalImage->resize(400, 300);
        $originalImage->save(storage_path('app/public/compressed/').$image);
        return redirect()->back();
    }
);

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
