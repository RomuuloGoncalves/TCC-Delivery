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
        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 20.00,
            'descricao' => 'Marmita Pequena',
            'cod_grupo_variacoes' => 1,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'M',
            'valor' => 25.00,
            'descricao' => 'Marmita Média',
            'cod_grupo_variacoes' => 1,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'G',
            'valor' => 30.00,
            'descricao' => 'Marmita Grande',
            'cod_grupo_variacoes' => 1,
        ]);

        //  Arroz

        DB::table('Variacoes')->insert([
            'nome' => 'Arroz Branco',
            'valor' => 0.00,
            'descricao' => 'Arroz branco',
            'cod_grupo_variacoes' => 2,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Arroz Integral',
            'valor' => 5.00,
            'descricao' => 'Arroz integral',
            'cod_grupo_variacoes' => 2,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Arroz à Grega',
            'valor' => 10.00,
            'descricao' => 'Arroz cozido com passas e legumes picados',
            'cod_grupo_variacoes' => 2,
        ]);

        // Feijão

        DB::table('Variacoes')->insert([
            'nome' => 'Feijão Carioca',
            'valor' => 0.00,
            'descricao' => 'Variação única',
            'cod_grupo_variacoes' => 3,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Feijão Branco',
            'valor' => 5.00,
            'descricao' => 'Variação única',
            'cod_grupo_variacoes' => 3,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Tutu de Feijão',
            'valor' => 5.00,
            'descricao' => 'Feijão cozido, refogado e engrossado com farinha',
            'cod_grupo_variacoes' => 3,
        ]);

        // Guarnição

        DB::table('Variacoes')->insert([
            'nome' => 'Filé de Frango',
            'valor' => 0.00,
            'descricao' => 'Filé de frango grelhado',
            'cod_grupo_variacoes' => 4,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Bife',
            'valor' => 0.00,
            'descricao' => 'Alcatra grelhada',
            'cod_grupo_variacoes' => 4,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Picanha',
            'valor' => 10.00,
            'descricao' => 'Picanha grelhada',
            'cod_grupo_variacoes' => 4,
        ]);

        // Acompanhamento

        DB::table('Variacoes')->insert([
            'nome' => 'Farofa',
            'valor' => 5.00,
            'descricao' => 'Farofa de mandioca',
            'cod_grupo_variacoes' => 5,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Maionese',
            'valor' => 5.00,
            'descricao' => 'Variação versátil',
            'cod_grupo_variacoes' => 5,
        ]);

        for ($i=6 ;$i <= 15; $i++) {
            if($i < 10) {
                DB::table('Variacoes')->insert([
                    'nome' => 'P',
                    'valor' => 20.00,
                    'descricao' => 'Marmita Pequena',
                    'cod_grupo_variacoes' => $i,
                ]);

                DB::table('Variacoes')->insert([
                    'nome' => 'M',
                    'valor' => 25.00,
                    'descricao' => 'Marmita Média',
                    'cod_grupo_variacoes' => $i,
                ]);

                DB::table('Variacoes')->insert([
                    'nome' => 'G',
                    'valor' => 30.00,
                    'descricao' => 'Marmita Grande',
                    'cod_grupo_variacoes' => $i,
                ]);
            } else {
                DB::table('Variacoes')->insert([
                    'nome' => '300ml',
                    'valor' => 5.00,
                    'descricao' => 'Bebida Pequena',
                    'cod_grupo_variacoes' => $i,
                ]);

                DB::table('Variacoes')->insert([
                    'nome' => '400ml',
                    'valor' => 7.50,
                    'descricao' => 'Bebida Média',
                    'cod_grupo_variacoes' => $i,
                ]);

                DB::table('Variacoes')->insert([
                    'nome' => '500ml',
                    'valor' => 10.00,
                    'descricao' => 'Bebida Grande',
                    'cod_grupo_variacoes' => $i,
                ]);
            }
        }
    }
}
