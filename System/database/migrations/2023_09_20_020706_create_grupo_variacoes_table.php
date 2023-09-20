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
            $table->id('cod_grupo_variacoes');
            $table->string('tipo');
            $table->integer('quantidade_variacoes');
            $table->unsignedBigInteger('cod_produto');
            $table->unsignedBigInteger('cod_variacao');
            $table->foreign('cod_produto')->references('cod_produto')->on('Produto');
            $table->foreign('cod_variacao')->references('cod_variacao')->on('Variacao');
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
