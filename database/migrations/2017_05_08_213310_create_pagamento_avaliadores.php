<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagamentoAvaliadores extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('pagamento_avaliadores', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('processo_id')->unsigned();
            $table->integer('avaliador_id')->unsigned();
            $table->integer('memorando')->nullable();
            $table->enum('tipo', ['interno', 'externo']);
            $table->dateTime('fechamento')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('processo_id')->references('id')->on('processos');
            $table->foreign('avaliador_id')->references('id')->on('avaliadores');
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
        Schema::dropIfExists('pagamento_avaliadores');
    }
}
