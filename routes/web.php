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

Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');
Route::get('/dashboard', 'HomeController@index');

Route::get('/import', 'ImportDataController@index');


Route::group(['middleware' => 'auth', 'prefix' => 'api', 'namespace'=>'Api'], function () {

    Route::get('/indicadores', 'DashboardController@index');
    Route::get('/processos-novos', 'DashboardController@newProcessos');

    Route::resource('processos', 'ProcessoController');
    Route::resource('pagamentos', 'PagamentoAvaliadorController', ['only' => [
        'index', 'store', 'destroy'
    ]]);

    Route::get('user/profile', function () {
        // Uses Auth Middleware
    });
});
