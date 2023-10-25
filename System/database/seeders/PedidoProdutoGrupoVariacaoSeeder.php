<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class PedidoProdutoGrupoVariacaoSeeder extends Seeder
{
    public function run()
    {
        // $faker = Factory::create();
        // $pedido_produtos = DB::table('Pedido_produtos')->pluck('id')->toArray();

        // for ($i = 1; $i <= 10; $i++) {
        //     DB::table('Pedido_produto_grupo_variacoes')->insert([
        //         'cod_pedido_produto' => $faker->randomElement($pedido_produtos),
        //     ]);
        // }

        DB::table('Pedido_produto_grupo_variacoes')->insert([
            'cod_pedido_produto' => 1,
        ]);

        DB::table('Pedido_produto_grupo_variacoes')->insert([
            'cod_pedido_produto' => 2,
        ]);
    }
}
