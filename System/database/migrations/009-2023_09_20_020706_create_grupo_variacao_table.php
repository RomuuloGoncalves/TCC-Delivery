<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Grupo_variacoes', function (Blueprint $table) {
            $table->id('id');
            $table->string('tipo');
            $table->integer('quantidade_variacoes_min')->default(1);
            $table->integer('quantidade_variacoes_max')->default(1);
            $table->unsignedBigInteger('cod_produto');
            $table->foreign('cod_produto')->references('id')->on('Produtos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Grupo_variacoes');
    }
};
