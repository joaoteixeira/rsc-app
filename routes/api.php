<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//, 'middleware' => 'auth'

Route::group(['namespace'=>'Api'], function () {

    Route::get('/indicadores', 'DashboardController@index');

    Route::resource('processo', 'ProcessoController');

//    Route::get('user/profile', function () {
//        // Uses Auth Middleware
//    });
});
