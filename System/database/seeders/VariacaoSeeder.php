<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VariacaoSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Variacoes')->insert([
                'nome' => $faker->word(),
                'porcentagem_desconto' => $faker->randomFloat(2, 1, 100),
                'valor_desconto' => $faker->randomFloat(2, 1, 100000),
                'valor_inicial' => $faker->randomFloat(2, 1, 100000),
                'imagem' => $faker->imageUrl(640, 480,),
                'descricao' => $faker->sentence(),
            ]);
        }
    }
}
