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
        // Variações Marmita Personalizada
        //  Tamanho
        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 20.00,
            'descricao' => 'Marmita Pequena',
            'cod_grupo_variacoes' => 1,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'M',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 25.00,
            'descricao' => 'Marmita Média',
            'cod_grupo_variacoes' => 1,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'G',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 30.00,
            'descricao' => 'Marmita Grande',
            'cod_grupo_variacoes' => 1,
        ]);

        //  Arroz

        DB::table('Variacoes')->insert([
            'nome' => 'Arroz Branco',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 0.00,
            'descricao' => 'Arroz branco',
            'cod_grupo_variacoes' => 2,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Arroz Integral',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 5.00,
            'descricao' => 'Arroz integral',
            'cod_grupo_variacoes' => 2,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Arroz à Grega',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 10.00,
            'descricao' => 'Arroz cozido com passas e legumes picados',
            'cod_grupo_variacoes' => 2,
        ]);

        // Feijão

        DB::table('Variacoes')->insert([
            'nome' => 'Feijão Carioca',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 0.00,
            'descricao' => 'Variação única',
            'cod_grupo_variacoes' => 3,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Feijão Branco',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 5.00,
            'descricao' => 'Variação única',
            'cod_grupo_variacoes' => 3,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Tutu de Feijão',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 5.00,
            'descricao' => 'Feijão cozido, refogado e engrossado com farinha',
            'cod_grupo_variacoes' => 3,
        ]);

        // Guarnição

        DB::table('Variacoes')->insert([
            'nome' => 'Filé de Frango',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 0.00,
            'descricao' => 'Filé de frango grelhado',
            'cod_grupo_variacoes' => 4,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Bife',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 0.00,
            'descricao' => 'Alcatra grelhada',
            'cod_grupo_variacoes' => 4,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Picanha',
            'porcentagem_desconto' => null,
            'valor_desconto' => 2.00,
            'valor_inicial' => 10.00,
            'descricao' => 'Picanha grelhada',
            'cod_grupo_variacoes' => 4,
        ]);

        // Acompanhamento

        DB::table('Variacoes')->insert([
            'nome' => 'Farofa',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 5.00,
            'descricao' => 'Farofa de mandioca',
            'cod_grupo_variacoes' => 5,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Maionese',
            'porcentagem_desconto' => null,
            'valor_desconto' => null,
            'valor_inicial' => 5.00,
            'descricao' => 'Variação versátil',
            'cod_grupo_variacoes' => 5,
        ]);

        for ($i=6 ;$i < 15; $i++) {
            if($i < 10) {
                DB::table('Variacoes')->insert([
                    'nome' => 'P',
                    'porcentagem_desconto' => null,
                    'valor_desconto' => null,
                    'valor_inicial' => 20.00,
                    'descricao' => 'Marmita Pequena',
                    'cod_grupo_variacoes' => $i,
                ]);

                DB::table('Variacoes')->insert([
                    'nome' => 'M',
                    'porcentagem_desconto' => null,
                    'valor_desconto' => null,
                    'valor_inicial' => 25.00,
                    'descricao' => 'Marmita Média',
                    'cod_grupo_variacoes' => $i,
                ]);

                DB::table('Variacoes')->insert([
                    'nome' => 'G',
                    'porcentagem_desconto' => null,
                    'valor_desconto' => null,
                    'valor_inicial' => 30.00,
                    'descricao' => 'Marmita Grande',
                    'cod_grupo_variacoes' => $i,
                ]);
            } else {
                DB::table('Variacoes')->insert([
                    'nome' => '300ml',
                    'porcentagem_desconto' => null,
                    'valor_desconto' => null,
                    'valor_inicial' => 5.00,
                    'descricao' => 'Bebida Pequena',
                    'cod_grupo_variacoes' => $i,
                ]);

                DB::table('Variacoes')->insert([
                    'nome' => '400ml',
                    'porcentagem_desconto' => null,
                    'valor_desconto' => null,
                    'valor_inicial' => 7.50,
                    'descricao' => 'Bebida Média',
                    'cod_grupo_variacoes' => $i,
                ]);

                DB::table('Variacoes')->insert([
                    'nome' => '500ml',
                    'porcentagem_desconto' => null,
                    'valor_desconto' => null,
                    'valor_inicial' => 10.00,
                    'descricao' => 'Bebida Grande',
                    'cod_grupo_variacoes' => $i,
                ]);
            }
        }
    }
}
