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
        Schema::create('Endereco', function (Blueprint $table) {
            $table->id('cod_endereco');
            $table->string('nome');
            $table->string('complemento')->nullable();
            $table->string('bairro');
            $table->string('numero', 5);
            $table->string('rua');
            $table->char('cep', 8)->nullable();
            $table->unsignedBigInteger('cod_cliente');
            $table->foreign('cod_cliente')->references('cod_cliente')->on('Cliente');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(table: 'Endereco');
    }
};
