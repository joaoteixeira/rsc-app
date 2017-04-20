<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Processo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProcessoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails())
            return [ 'success' => false, 'errors' => $validator->errors() ];

        $processo = Processo::create($request->all());

        return [ 'success' => true, 'data' => $processo ];

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    protected function validator(array $data)
    {

        return Validator::make($data, [
            'processo' => 'required|max:255',
            'banca' => 'required|integer|max:255',
            'link' => 'required|max:255',
            'tipo' => 'required|max:7',
            //'phone'       => 'required|size:9|regex:/^[0-9]{4}\\-[0-9]{4}/'
        ]);
    }
}
