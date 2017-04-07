<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Avaliador extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'avaliadores';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['banca', 'nome', 'siape', 'cpf', 'email', 'tipo', 'banco', 'agencia', 'conta', 'instituicao_', 'status_pagamento'];

    public function processos()
    {
        return $this->belongsToMany('App\Processo')->withTimestamps();
    }

}
