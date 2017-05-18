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

//,

//Route::group(['middleware' => 'auth', 'namespace'=>'Api'], function () {
//
//    Route::get('/indicadores', 'DashboardController@index');
//    Route::get('/processos-novos', 'DashboardController@newProcessos');
//
//    Route::resource('processos', 'ProcessoController');
//    Route::resource('pagamentos', 'PagamentoAvaliadorController', ['only' => [
//        'index', 'store', 'destroy'
//    ]]);
//
//    Route::get('user/profile', function () {
//        // Uses Auth Middleware
//    });
//});
