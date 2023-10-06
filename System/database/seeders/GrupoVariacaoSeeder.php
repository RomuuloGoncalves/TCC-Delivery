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
        $faker = Factory::create();
        $produtos = DB::table('Produtos')->pluck('id')->toArray();
        $variacoes = DB::table('Variacoes')->pluck('id')->toArray();

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Grupo_variacoes')->insert([
                'tipo' => $faker->word(),
                'quantidade_variacoes' => $faker->randomDigit(),
                'cod_produto' => $faker->randomElement($produtos),
                'cod_variacao' => $faker->randomElement($variacoes),
            ]);
        }
    }
}
