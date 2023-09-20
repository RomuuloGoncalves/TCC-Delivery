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
        Schema::create('Pedido_produto', function (Blueprint $table) {
            $table->id('cod_pedido_produto');
            $table->unsignedBigInteger('cod_pedido');
            $table->unsignedBigInteger('cod_produto');
            $table->foreign('cod_pedido')->references('cod_pedido')->on('Pedido');
            $table->foreign('cod_produto')->references('cod_produto')->on('Produto');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Pedido_produto');
    }
};
