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
        Schema::disableForeignKeyConstraints();

        Schema::create('avaliadores', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->integer('instituicao_id')->unsigned()->nullable();
            $table->enum('tipo', ['interno', 'externo']);
            //$table->string('banca')->nullable();
            $table->string('nome');
            $table->string('siape')->nullable();
            $table->string('cpf')->nullable();
            $table->string('email')->nullable();
            $table->string('banco')->nullable();
            $table->string('agencia')->nullable();
            $table->string('conta')->nullable();
            $table->string('instituicao_')->nullable();
            $table->enum('status_pagamento', ['pendente', 'pago', 'restricao']);
            $table->timestamps();

            $table->foreign('instituicao_id')->references('id')->on('instituicoes');
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();

        Schema::dropIfExists('avaliadores');

        Schema::enableForeignKeyConstraints();
    }
}
