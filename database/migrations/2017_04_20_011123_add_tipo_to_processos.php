<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTipoToProcessos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::table('processos', function (Blueprint $table) {
            $table->enum('tipo', ['RSC-I', 'RSC-II', 'RSC-III'])->nullable();
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

        Schema::table('processos', function (Blueprint $table) {
            $table->dropColumn('tipo');
        });

        Schema::enableForeignKeyConstraints();
    }
}
