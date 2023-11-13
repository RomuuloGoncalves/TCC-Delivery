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
        for ($i = 1; $i < 10; $i++) {
            DB::table('Variacoes')->insert([
                'nome' => 'P',
                'valor' => 26.99,
                'cod_grupo_variacoes' => $i,
            ]);
        }

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 15.99,
            'cod_grupo_variacoes' => 10,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 47.98,
            'cod_grupo_variacoes' => 11,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 47.98,
            'cod_grupo_variacoes' => 12,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 13.00,
            'cod_grupo_variacoes' => 13,
        ]);
    }
}
