<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PagamentoAvaliador extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */

    protected $table = 'pagamento_avaliadores';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['user_id', 'processo_id', 'avaliador_id', 'memorando', 'tipo'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function processo()
    {
        return $this->belongsTo('App\Processo');
    }

    public function avaliador()
    {
        return $this->belongsTo('App\Avaliador');
    }

    public function responsavel()
    {
        return $this->user()->name;
    }

}
