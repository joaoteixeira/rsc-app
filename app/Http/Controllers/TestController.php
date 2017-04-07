<?php

namespace App\Http\Controllers;

use App\Avaliador;
use App\Processo;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class TestController extends Controller
{
    public function index()
    {

        Excel::load(storage_path('excel/files.xlsx'), function ($reader) {

            // Getting all results
            //$results = $reader->dd();

            //$r = $reader->get(array('interessado_avaliado', 'siape_avaliado'));

            //dd($r);

            //dd($results);

            // ->all() is a wrapper for ->get() and will work the same
            //$results = $reader->all();

            //dd($results);


            $reader->each(function ($row) {

                // Loop through all rows
                //dd($row->siape_avaliado);
                $this->insertPrepare($row);


            });

        });

        /*

        "banca" => 143.0
        "interessado_avaliado" => "CLODOALDO CRISTIANO REIS"
        "siape_avaliado" => 1886957.0
        "processo" => "23243.004875/2015-18"
        "avaliador_interno" => "ALVINO MORAES DE AMORIM"
        "siape" => 2101834.0
        "instituicao_interno" => "Instituto Federal de Educação, Ciência e Tecnologia de Rondonia"
        "status_pagto_interno" => "pago"
        "externo_1" => "KLEIDSON NASCIMENTO DOS SANTOS"
        "instituicao_externo_1" => "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe"
        "status_pagto_externo_1" => "pago"
        "externo_2" => "FERNANDO DE AZEVEDO ALVES BRITO"
        "instituicao_externo_2" => "Instituto Federal de Educação, Ciência e Tecnologia da Bahia"
        "status_pagto_externo_2" => "pendente"

         */

        //$processos =

        return ['test' => 'ok'];
    }

    private function insertPrepare($row)
    {
        $processoData = [
            'banca'    => intval($row->banca),
            'servidor' => $row->interessado_avaliado,
            'siape'    => $row->siape_avaliado,
            'processo' => $row->processo,
        ];

        $processo = $this->insertProcesso($processoData);

        $avaliadores[] = [
//            'processo_id'      => $processo->id,
            'banca'    => intval($row->banca),
            'nome'             => $row->avaliador_interno,
            'siape'            => intval($row->siape),
            'tipo'             => 'interno',
            'instituicao_'     => $row->instituicao_interno,
            'status_pagamento' => $row->status_pagto_interno,
        ];

        $avaliadores[] = [
//            'processo_id'      => $processo->id,
            'banca'    => intval($row->banca),
            'nome'             => $row->externo_1,
            //'siape' => $row->siape,
            'tipo'             => 'externo',
            'instituicao_'     => $row->instituicao_externo_1,
            'status_pagamento' => $row->status_pagto_externo_1,
        ];

        $avaliadores[] = [
//            'processo_id'      => $processo->id,
            'banca'    => intval($row->banca),
            'nome'             => $row->externo_2,
            //'siape' => $row->siape,
            'tipo'             => 'externo',
            'instituicao_'     => $row->instituicao_externo_2,
            'status_pagamento' => $row->status_pagto_externo_2,
        ];

        $this->insertAvaliador($avaliadores, $processo);

    }

    private function insertAvaliador($avaliadores, $processo)
    {
        foreach ($avaliadores as $avaliador)
            $aval = Avaliador::create($avaliador);
            $processo->avaliadores()->attach($aval);
    }

    private function insertProcesso($processo)
    {
        return Processo::create($processo);
    }


}
