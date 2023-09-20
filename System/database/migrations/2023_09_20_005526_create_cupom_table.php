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
        Schema::create('Cupom', function (Blueprint $table) {
            $table->id('cod_cupom');
            $table->string('nome');
            $table->unsignedDecimal('porcentagem_desconto', 5, 2)->nullable();
            $table->unsignedDecimal('valor_desconto', 9, 2)->nullable();
            $table->dateTime('data_validade')->nullable();
            $table->integer('quantidade')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(table: 'Cupom');
    }
};
