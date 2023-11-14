<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PedidoProdutoSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();
        $produtos = DB::table('Produtos')->where('cod_categoria', 1)->orWhere('cod_categoria', 2)->get()->pluck('id')->toArray();

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Pedido_produtos')->insert([
                'cod_pedido' => $i,
                'cod_produto' => $faker->randomElement($produtos),
                'total' => $faker->randomFloat(2, 15, 250),
                'quantidade' => $faker->randomFloat(0, 1, 3),
            ]);

            DB::table('Pedido_produtos')->insert([
                'cod_pedido' => $i,
                'cod_produto' => $faker->randomElement($produtos),
                'total' => $faker->randomFloat(2, 15, 250),
                'quantidade' => $faker->randomFloat(0, 1, 3),
            ]);
        }
    }
}
