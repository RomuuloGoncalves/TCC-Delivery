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
        Schema::create('Pedido_produtos', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('cod_pedido');
            $table->unsignedBigInteger('cod_produto');
            $table->foreign('cod_pedido')->references('id')->on('Pedidos');
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
        Schema::dropIfExists('Pedido_produtos');
    }
};
