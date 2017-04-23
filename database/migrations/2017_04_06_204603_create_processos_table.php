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
        Schema::create('processos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('servidor_id')->unsigned()->nullable();
            //tipo RSC I / II / III
            $table->string('link')->nullable();
            $table->string('banca');
            $table->string('processo');
            $table->timestamps();

            $table->foreign('servidor_id')->references('id')->on('servidor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('processos');
    }
}
