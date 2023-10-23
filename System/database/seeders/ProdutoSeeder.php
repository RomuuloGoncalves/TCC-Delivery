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
        unset($categorias[5]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Marmita Personalizada',
            'descricao' => 'Uma marmita totalmente personálizavel, escolha oque você quiser.',
            'cod_categoria' => 6,
        ]);
        for ($i = 1; $i <= 10; $i++) {
            DB::table('Produtos')->insert([
                'nome' => $faker->word(),
                'descricao' => $faker->sentence(),
                'cod_categoria' => $faker->randomElement($categorias),
            ]);
        }
    }
}
