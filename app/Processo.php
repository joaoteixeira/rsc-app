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

    protected $fillable = ['servidor', 'siape', 'link', 'banca', 'processo'];

    public function avaliadores()
    {
        return $this->belongsToMany('App\Avaliador')->withTimestamps();
    }

}
