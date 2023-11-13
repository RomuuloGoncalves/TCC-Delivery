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
        $marmitex_do_dia = DB::table('Produtos')->where('cod_categoria', 2)->get()->pluck('id')->toArray();

        foreach($marmitex_do_dia as $id) {
            DB::table('Grupo_variacoes')->insert([
                'tipo' => 'Tamanho',
                'cod_produto' => $id,
            ]);
        }
    }
}
