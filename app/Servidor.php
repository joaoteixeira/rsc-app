<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servidor extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */

    protected $table = 'servidores';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['nome', 'siape'];

    public function processos()
    {
        return$this->hasMany('App\Processo');
    }
}
