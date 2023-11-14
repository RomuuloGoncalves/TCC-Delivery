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

        $marmitex_premium = DB::table('Produtos')->where('cod_categoria', 3)->get()->pluck('id')->toArray();
        foreach($marmitex_premium as $id) {
            DB::table('Grupo_variacoes')->insert([
                'tipo' => 'Tamanho',
                'cod_produto' => $id,
            ]);
        }

        $marmitex_vegetariana = DB::table('Produtos')->where('cod_categoria', 4)->get()->pluck('id')->toArray();
        foreach($marmitex_vegetariana as $id) {
            DB::table('Grupo_variacoes')->insert([
                'tipo' => 'Tamanho',
                'cod_produto' => $id,
            ]);
        }

        $porcoes = DB::table('Produtos')->where('cod_categoria', 5)->get()->pluck('id')->toArray();
        foreach($porcoes as $id) {
            DB::table('Grupo_variacoes')->insert([
                'tipo' => 'Tamanho',
                'cod_produto' => $id,
            ]);
        }

        $bebidas = DB::table('Produtos')->where('cod_categoria', 6)->get()->pluck('id')->toArray();
        foreach($bebidas as $id) {
            DB::table('Grupo_variacoes')->insert([
                'tipo' => 'Tamanho',
                'cod_produto' => $id,
            ]);
        }

        $combo_ftit = DB::table('Produtos')->where('cod_categoria', 7)->get()->pluck('id')->toArray();
        foreach($combo_ftit as $id) {
            DB::table('Grupo_variacoes')->insert([
                'tipo' => 'Tamanho',
                'cod_produto' => $id,
            ]);
        }
    }
}
