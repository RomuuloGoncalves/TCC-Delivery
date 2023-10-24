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
        //     $faker = Factory::create();

        //     $grupo_variacoes = DB::table('Grupo_variacoes')->pluck('id')->toArray();

        //     for ($i = 1; $i <= 10; $i++) {
        //         DB::table('Variacoes')->insert([
        //             'nome' => $faker->word(),
        //             'porcentagem_desconto' => $faker->randomFloat(2, 1, 100),
        //             'valor_desconto' => $faker->randomFloat(2, 1, 100000),
        //             'valor_inicial' => $faker->randomFloat(2, 1, 100000),
        //             'imagem' => $faker->imageUrl(640, 480,),
        //             'descricao' => $faker->sentence(),
        //             'cod_grupo_variacoes' => $faker->randomElement($grupo_variacoes),
        //         ]);
        //     }

        DB::table('Variacoes')->insert([
            'nome' => 'Variação 1',
            'porcentagem_desconto' => 10.00,
            'valor_desconto' => null,
            'valor_inicial' => 25.00,
            'descricao' => 'Uma variação do produto',
            'cod_grupo_variacoes' => 1,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Variação 2',
            'porcentagem_desconto' => null,
            'valor_desconto' => 5.00,
            'valor_inicial' => 30.00,
            'descricao' => 'Outra variação do produto',
            'cod_grupo_variacoes' => 1,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Variação 3',
            'porcentagem_desconto' => 15.00,
            'valor_desconto' => null,
            'valor_inicial' => 40.00,
            'descricao' => 'Uma terceira variação',
            'cod_grupo_variacoes' => 2,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Variação 4',
            'porcentagem_desconto' => null,
            'valor_desconto' => 8.00,
            'valor_inicial' => 50.00,
            'descricao' => 'Mais uma variação',
            'cod_grupo_variacoes' => 2,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Variação 5',
            'porcentagem_desconto' => 12.50,
            'valor_desconto' => null,
            'valor_inicial' => 60.00,
            'descricao' => 'Outra variação interessante',
            'cod_grupo_variacoes' => 3,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Variação 6',
            'porcentagem_desconto' => null,
            'valor_desconto' => 10.00,
            'valor_inicial' => 70.00,
            'descricao' => 'Variação única',
            'cod_grupo_variacoes' => 3,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Variação 7',
            'porcentagem_desconto' => 8.00,
            'valor_desconto' => null,
            'valor_inicial' => 80.00,
            'descricao' => 'Outra variação importante',
            'cod_grupo_variacoes' => 4,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Variação 8',
            'porcentagem_desconto' => null,
            'valor_desconto' => 15.00,
            'valor_inicial' => 90.00,
            'descricao' => 'Variação versátil',
            'cod_grupo_variacoes' => 4,
        ]);
    }
}
