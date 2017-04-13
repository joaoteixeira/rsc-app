<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Processo;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $processos = Processo::all();


        return [ 'total' => $processos->count(), 'abertos' => $processos->count() ];
    }

}
