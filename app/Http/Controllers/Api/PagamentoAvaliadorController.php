<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Avaliador;
use App\PagamentoAvaliador;
use App\Processo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PagamentoAvaliadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pagamentos = PagamentoAvaliador::with('user', 'processo', 'avaliador')->get();

        return $pagamentos;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->checkData($request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    protected function checkData(Request $request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails())
            return ['success' => false, 'errors' => $validator->errors()];

        $avaliador = Avaliador::find($request->avaliador);

        if (!$avaliador)
            return ['success' => false, 'errors' => ["O sistema não encontrou o avaliador {$request->avaliador}"]];

        //if(empty($avaliador->agencia) || empty($avaliador->conta))
        //    return ['success' => false, 'errors' => ["O dados de bancário do Avaliador está incompleto. Favor verificar!"]];

        $processo = Processo::whereHas('avaliadores', function ($q) use ($avaliador) {
            $q->where('id', $avaliador->id);
        })->find($request->processo);

        if(!$processo)
            return ['success' => false, 'errors' => ['O sistema não encontrou o processo do avaliador enviado.']];

        if($processo->pagamento == 'pago')
            return ['success' => false, 'errors' => ["O avaliador já foi pago no processo Nº {$processo->processo} anteriormente."]];

        return $this->addAvaliador($processo, $avaliador);
    }

    protected function addAvaliador($processo, $avaliador)
    {
        $pagamento = PagamentoAvaliador::firstOrCreate([
            'user_id'      => 1, //TODO trocar por Auth::id()
            'processo_id'  => $processo->id,
            'avaliador_id' => $avaliador->id,
            'tipo'         => $avaliador->tipo
        ]);

        return ['success' => true, 'data' => $pagamento];
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'processo'  => 'required|integer',
            'avaliador' => 'required|integer'
        ]);
    }
}
