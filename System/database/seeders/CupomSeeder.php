<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CupomSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Cupons')->insert([
                'nome' => $faker->word(),
                'porcentagem_desconto' => $faker->randomFloat(2, 1, 100),
                'valor_desconto' => $faker->randomFloat(2, 1, 100000),
                'data_validade' => $faker->dateTimeThisYear(),
                'quantidade' => $faker->randomNumber(),
                'status' => $faker->boolean()
            ]);
        }
    }
}
