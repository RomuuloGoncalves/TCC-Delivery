<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GrupoVariacaoSeeder extends Seeder
{
    public function run()
    {
        // $faker = Factory::create();
        // $produtos = DB::table('Produtos')->pluck('id')->toArray();

        // for ($i = 1; $i <= 10; $i++) {
        //     DB::table('Grupo_variacoes')->insert([
        //         'tipo' => $faker->word(),
        //         'quantidade_variacoes' => $faker->randomDigit(),
        //         'cod_produto' => $faker->randomElement($produtos),
        //     ]);
        // }

        DB::table('Pedido_produtos')->insert([
            'cod_pedido' => 1,
            'cod_produto' => 1,
        ]);

        DB::table('Pedido_produtos')->insert([
            'cod_pedido' => 1,
            'cod_produto' => 2,
        ]);

        DB::table('Pedido_produtos')->insert([
            'cod_pedido' => 2,
            'cod_produto' => 3,
        ]);

        DB::table('Pedido_produtos')->insert([
            'cod_pedido' => 2,
            'cod_produto' => 4,
        ]);

        DB::table('Pedido_produtos')->insert([
            'cod_pedido' => 3,
            'cod_produto' => 5,
        ]);

        DB::table('Pedido_produtos')->insert([
            'cod_pedido' => 3,
            'cod_produto' => 6,
        ]);
    }
}
