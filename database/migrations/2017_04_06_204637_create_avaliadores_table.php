<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAvaliadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliadores', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('instituicao_id')->unsigned()->nullable();
            $table->enum('tipo', ['interno', 'externo']);
            $table->string('banca')->nullable();
            $table->string('nome');
            $table->string('siape')->nullable();
            $table->string('cpf')->nullable();
            $table->string('email')->nullable();
            $table->string('banco')->nullable();
            $table->string('agencia')->nullable();
            $table->string('conta')->nullable();
            $table->string('instituicao_');
            $table->enum('status_pagamento', ['pendente', 'pago', 'restricao']);
            $table->timestamps();

            $table->foreign('instituicao_id')->references('id')->on('instituicoes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('avaliadores');
    }
}
