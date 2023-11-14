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
        DB::table('Pedido_produto_grupo_variacoes')->insert([
            'quantidade' => 2,
            'cod_pedido_produto' => 1,
        ]);

        DB::table('Pedido_produto_grupo_variacoes')->insert([
            'cod_pedido_produto' => 2,
        ]);

        DB::table('Pedido_produto_grupo_variacoes')->insert([
            'quantidade' => 2,
            'cod_pedido_produto' => 21,
        ]);

        DB::table('Pedido_produto_grupo_variacoes')->insert([
            'cod_pedido_produto' => 22,
        ]);
    }
}
