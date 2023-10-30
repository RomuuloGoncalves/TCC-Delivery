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
        $marmitas_bebidas = DB::table('Produtos')->where('cod_categoria', 1)->orWhere('cod_categoria', 2)->get()->pluck('id')->toArray();

        // for ($i = 1; $i <= 10; $i++) {
        //     DB::table('Grupo_variacoes')->insert([
        //         'tipo' => $faker->word(),
        //         'quantidade_variacoes' => $faker->randomDigit(),
        //         'cod_produto' => $faker->randomElement($produtos),
        //     ]);
        // }
        DB::table('Grupo_variacoes')->insert([
            'tipo' => 'Tamanho',
            'cod_produto' => 1,
        ]);

        DB::table('Grupo_variacoes')->insert([
            'tipo' => 'Arroz',
            'cod_produto' => 1,
        ]);

        DB::table('Grupo_variacoes')->insert([
            'tipo' => 'Feijão',
            'cod_produto' => 1,
        ]);

        DB::table('Grupo_variacoes')->insert([
            'tipo' => 'Guarnição',
            'cod_produto' => 1,
        ]);

        DB::table('Grupo_variacoes')->insert([
            'tipo' => 'Acompanhamento',
            'quantidade_variacoes_max' => 2,
            'cod_produto' => 1,
        ]);

        foreach($marmitas_bebidas as $id) {
            DB::table('Grupo_variacoes')->insert([
                'tipo' => 'Tamanho',
                'cod_produto' => $id,
            ]);
        }
    }
}
