<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PedidoProdutoSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();
        // $pedidos = DB::table('Pedidos')->pluck('id')->toArray();
        $produtos = DB::table('Produtos')->pluck('id')->toArray();

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Pedido_produtos')->insert([
                'cod_pedido' => $i,
                'cod_produto' => $faker->randomElement($produtos),
            ]);

            DB::table('Pedido_produtos')->insert([
                'cod_pedido' => $i,
                'cod_produto' => $faker->randomElement($produtos),
            ]);
        }

        DB::table('Pedido_produtos')->insert([
            'cod_pedido' => 11,
            'cod_produto' => 2,
        ]);

        DB::table('Pedido_produtos')->insert([
            'cod_pedido' => 11,
            'cod_produto' => 9,
        ]);
    }
}
