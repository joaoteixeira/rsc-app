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
            $table->integer('instituicao_id')->unsigned();

            $table->string('nome');
            $table->string('siape')->unique();
            $table->string('cpf')->unique();
            $table->string('email')->unique();
            $table->string('banco');
            $table->string('agencia');
            $table->string('conta');
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
