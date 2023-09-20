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
        Schema::create('Pedido_produto_grupo_variacoes', function (Blueprint $table) {
            $table->id('cod_pedido_produto_grupo_variacoes');
            $table->unsignedBigInteger('cod_pedido_produto');
            $table->unsignedBigInteger('cod_grupo_variacoes');
            $table->unsignedBigInteger('cod_variacao')->nullable();
            $table->foreign('cod_pedido_produto')->references('cod_pedido_produto')->on('Pedido_produto');
            $table->foreign('cod_grupo_variacoes')->references('cod_grupo_variacoes')->on('Grupo_variacoes');
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
        Schema::dropIfExists('Pedido_produto_grupo_variacoes');
    }
};
