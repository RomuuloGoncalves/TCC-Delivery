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
        $categorias = DB::table('Categorias')->pluck('id')->toArray();

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Produtos')->insert([
                'nome' => $faker->word(),
                'descricao' => $faker->sentence(),
                'cod_categoria' => $faker->randomElement($categorias),
            ]);
        }
    }
}
