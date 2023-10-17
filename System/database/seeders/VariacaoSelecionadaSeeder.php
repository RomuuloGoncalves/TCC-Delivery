<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VariacaoSelecionadaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        $pedido_produto_grupo_variacoes = DB::table('Pedido_produto_grupo_variacoes')->pluck('id')->toArray();
        $variacoes = DB::table('Variacoes')->pluck('id')->toArray();

        for ($i = 1; $i <= 20; $i++) {
            DB::table('Variacao_selecionadas')->insert([
                'cod_pedido_produto_grupo_variacoes' => $faker->randomElement($pedido_produto_grupo_variacoes),
                'cod_variacao' => $faker->randomElement($variacoes),
            ]);
        }
    }
}
