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
        Schema::create('Cupons', function (Blueprint $table) {
            $table->id('id');
            $table->string('nome')->unique();
            $table->unsignedDecimal('porcentagem_desconto', 5, 2)->nullable();
            $table->unsignedDecimal('valor_desconto', 9, 2)->nullable();
            $table->dateTime('data_validade')->nullable();
            $table->integer('quantidade')->nullable();
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
        Schema::dropIfExists(table: 'Cupons');
    }
};
