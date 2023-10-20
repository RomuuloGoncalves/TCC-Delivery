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
            $table->id('id');
            $table->unsignedBigInteger('cod_pedido_produto');
            $table->foreign('cod_pedido_produto')->references('id')->on('Pedido_produtos');
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
        Schema::dropIfExists('Pedido_produto_grupo_variacoes');
    }
};
