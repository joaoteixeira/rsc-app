<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcessosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('processos', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->integer('servidor_id')->unsigned()->nullable();
            //tipo RSC I / II / III
            $table->string('link')->nullable();
            $table->string('banca');
            $table->string('processo')->nullable();
            $table->timestamps();

            $table->foreign('servidor_id')->references('id')->on('servidores');
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

        Schema::dropIfExists('processos');

        Schema::enableForeignKeyConstraints();

    }
}
