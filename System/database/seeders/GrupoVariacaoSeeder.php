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
        // $marmitas_bebidas = DB::table('Produtos')->where('cod_categoria', 1)->orWhere('cod_categoria', 2)->get()->pluck('id')->toArray();

        // DB::table('Grupo_variacoes')->insert([
        //     'tipo' => 'Tamanho',
        //     'cod_produto' => 1,
        // ]);

        // DB::table('Grupo_variacoes')->insert([
        //     'tipo' => 'Arroz',
        //     'cod_produto' => 1,
        // ]);

        // DB::table('Grupo_variacoes')->insert([
        //     'tipo' => 'Feijão',
        //     'quantidade_variacoes_min' => 1,
        //     'cod_produto' => 1,
        // ]);

        // DB::table('Grupo_variacoes')->insert([
        //     'tipo' => 'Guarnição',
        //     'quantidade_variacoes_max' => 2,
        //     'cod_produto' => 1,
        // ]);

        // DB::table('Grupo_variacoes')->insert([
        //     'tipo' => 'Acompanhamento',
        //     'quantidade_variacoes_max' => 1,
        //     'cod_produto' => 1,
        // ]);

        // foreach($marmitas_bebidas as $id) {
        //     DB::table('Grupo_variacoes')->insert([
        //         'tipo' => 'Tamanho',
        //         'cod_produto' => $id,
        //     ]);
        // }
    }
}
