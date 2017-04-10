<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Processo extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */

    protected $table = 'processos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['servidor_id', 'link', 'banca', 'processo'];

    public function servidor()
    {
        return $this->belongsTo('App\Servidor', 'servidor_id');
    }

    public function avaliadores()
    {
        return $this->belongsToMany('App\Avaliador')->withTimestamps();
    }

}
