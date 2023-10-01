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
            $table->integer('quantidade_variacoes');
            $table->unsignedBigInteger('cod_produto');
            $table->unsignedBigInteger('cod_variacao');
            $table->foreign('cod_produto')->references('id')->on('Produtos');
            $table->foreign('cod_variacao')->references('id')->on('Variacoes');
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
        Schema::dropIfExists('Grupo_variacoes');
    }
};