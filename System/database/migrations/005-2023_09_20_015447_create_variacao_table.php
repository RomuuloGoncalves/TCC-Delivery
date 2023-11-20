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
        Schema::create('Variacoes', function (Blueprint $table) {
            $table->id('id');
            $table->string('nome');
            $table->string('descricao')->nullable();
            $table->unsignedDecimal('valor', 8, 2)->default(0);
            $table->string('imagem')->nullable();
            $table->unsignedBigInteger('cod_grupo_variacoes');
            $table->foreign('cod_grupo_variacoes')->references('id')->on('Grupo_variacoes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Variacoes');
    }
};
