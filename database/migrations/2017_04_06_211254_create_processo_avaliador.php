<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcessoAvaliador extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliador_processo', function (Blueprint $table) {

            $table->integer('processo_id')->unsigned()->index();
            $table->foreign('processo_id')->references('id')
                ->on('processos')->onDelete('cascade');

            $table->integer('avaliador_id')->unsigned()->index();
            $table->foreign('avaliador_id')->references('id')
                ->on('avaliadores')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('processo_avaliador');
    }
}
