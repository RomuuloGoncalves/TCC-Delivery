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
        Schema::create('pedido', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cliente_id');
            $table->unsignedBigInteger('funcionario_id');
            $table->unsignedBigInteger('cupom_id');
            $table->date('data_pedido');
            $table->date('data_pagamento');
            $table->enum('status_pedido', ['pronto', 'em entrega', 'cancelado', 'em espera']);
            $table->enum('forma_pagamento', ['crédito', 'dinheiro', 'pix', 'débito']);
            $table->string('endereco_entrega');
            $table->float('valor_total');
            $table->float('valor_com_desconto');
            $table->timestamps();
            $table->index('cliente_id');
            $table->index('funcionario_id');
            $table->index('cupom_id');
        });//
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
