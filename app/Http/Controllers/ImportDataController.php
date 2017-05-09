<?php

namespace App\Http\Controllers;

use App\Avaliador;
use App\Processo;
use App\Servidor;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ImportDataController extends Controller
{
    public function index()
    {

        Excel::load(storage_path('excel/file2.xlsx'), function ($reader) {

            //dd($reader);

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


        if(!empty($row->interessado_avaliado)) {

            $servidorData = [
                'nome'  => strtoupper($row->interessado_avaliado),
                'siape' => $row->siape_avaliado,
            ];

            $servidor = $this->insertServidor($servidorData);


            $processoData = [
                'servidor_id' => $servidor->id,
                'banca'       => intval($row->banca),
                'processo'    => $row->processo,
            ];

            $processo = $this->insertProcesso($processoData);

            $avaliadores = [];

            if (!empty($row->avaliador_interno))
                $avaliadores[] = [
                    'nome'             => strtoupper($row->avaliador_interno),
                    'tipo'             => 'interno',
                    'siape'            => intval($row->siape),
                    'instituicao_'     => strtoupper($row->instituicao_interno),
                    'status_pagamento' => $row->status_pagto_interno,
                ];

            if (!empty($row->externo_1))
                $avaliadores[] = [
                    'nome'             => strtoupper($row->externo_1),
                    'tipo'             => 'externo',
                    'siape'            => intval($row->siape_externo_1),
                    'instituicao_'     => strtoupper($row->instituicao_externo_1),
                    'status_pagamento' => $row->status_pagto_externo_1,
                ];

            if (!empty($row->externo_2)) {
                $avaliadores[] = [
                    'nome'             => strtoupper($row->externo_2),
                    'tipo'             => 'externo',
                    'siape'            => intval($row->siape_externo_2),
                    'instituicao_'     => strtoupper($row->instituicao_externo_2),
                    'status_pagamento' => $row->status_pagto_externo_2,
                ];
            }

            if(sizeof($avaliadores) > 0)
                $this->insertAvaliador($avaliadores, $processo);
        }
    }

    private function insertServidor($servidor)
    {
        return Servidor::firstOrCreate($servidor);
    }

    private function insertAvaliador($avaliadores, $processo)
    {
        foreach ($avaliadores as $avaliador) {
            $aval = Avaliador::firstOrCreate($avaliador);
            $processo->avaliadores()->attach($aval, ['pagamento' => $aval->status_pagamento]);
        }

    }

    private function insertProcesso($processo)
    {
        return Processo::create($processo);
    }

}
