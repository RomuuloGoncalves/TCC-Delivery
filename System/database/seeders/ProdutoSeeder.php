<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdutoSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Produtos')->insert([
                'nome' => $faker->word(),
                'descricao' => $faker->sentence(),
                'categoria' => $faker->randomElement(['Marmita Pronta', 'Bebida', 'Sobremesa', 'Combos']),
            ]);
        }
    }
}
