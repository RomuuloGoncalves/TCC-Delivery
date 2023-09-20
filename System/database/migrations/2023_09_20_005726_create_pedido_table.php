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
        Schema::create('Pedido', function (Blueprint $table) {
            $table->id('cod_pedido');
            $table->float('valor_total');
            $table->float('valor_com_desconto')->nullable();
            $table->dateTime('data_pedido');
            $table->dateTime('data_entrega');
            $table->dateTime('data_pagamento');
            $table->string('complemento')->nullable();
            $table->string('bairro');
            $table->string('numero', 5);
            $table->string('rua');
            $table->char('cep', 8)->nullable();
            $table->enum('status_pedido', ['pronto', 'em entrega', 'cancelado', 'em espera']);
            $table->enum('forma_pagamento', ['crédito', 'dinheiro', 'pix', 'débito']);
            $table->unsignedBigInteger('cod_cliente');
            $table->unsignedBigInteger('cod_funcionario');
            $table->unsignedBigInteger('cod_endereco')->nullable();
            $table->unsignedBigInteger('cod_cupom')->nullable();
            $table->foreign('cod_cliente')->references('cod_cliente')->on('Cliente');
            $table->foreign('cod_funcionario')->references('cod_funcionario')->on('Funcionario');
            $table->foreign('cod_endereco')->references('cod_endereco')->on('Endereco');
            $table->foreign('cod_cupom')->references('cod_cupom')->on('Cupom');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(table: 'Pedido');
    }
};
