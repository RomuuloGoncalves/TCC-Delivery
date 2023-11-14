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

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 26.99,
            'cod_grupo_variacoes' => 14,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 25.99,
            'cod_grupo_variacoes' => 15,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 34.99,
            'cod_grupo_variacoes' => 16,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 30.99,
            'cod_grupo_variacoes' => 17,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 26.99,
            'cod_grupo_variacoes' => 18,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 27.99,
            'cod_grupo_variacoes' => 19,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 10.99,
            'cod_grupo_variacoes' => 20,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 28.99,
            'cod_grupo_variacoes' => 21,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 7.99,
            'cod_grupo_variacoes' => 22,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '1L',
            'valor' => 13.99,
            'cod_grupo_variacoes' => 23,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '200ml',
            'valor' => 8.50,
            'cod_grupo_variacoes' => 24,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '600ml',
            'valor' => 7.99,
            'cod_grupo_variacoes' => 25,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '350ml',
            'valor' => 8.00,
            'cod_grupo_variacoes' => 26,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '300ml',
            'valor' => 7.99,
            'cod_grupo_variacoes' => 27,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '500ml',
            'valor' => 8.99,
            'cod_grupo_variacoes' => 28,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '500ml',
            'valor' => 8.99,
            'cod_grupo_variacoes' => 29,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '500ml',
            'valor' => 7.99,
            'cod_grupo_variacoes' => 30,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '500ml',
            'valor' => 8.99,
            'cod_grupo_variacoes' => 31,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '350ml',
            'valor' => 3.99,
            'cod_grupo_variacoes' => 32,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => '2L',
            'valor' => 9.99,
            'cod_grupo_variacoes' => 33,
        ]);

        // Marmita personalizada
        DB::table('Variacoes')->insert([
            'nome' => 'P',
            'valor' => 10.00,
            'cod_grupo_variacoes' => 35,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'M',
            'valor' => 15.00,
            'cod_grupo_variacoes' => 35,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'G',
            'valor' => 20.00,
            'cod_grupo_variacoes' => 35,
        ]);

        //--
        DB::table('Variacoes')->insert([
            'nome' => 'Branco',
            'valor' => 9.99,
            'cod_grupo_variacoes' => 36,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Integral',
            'valor' => 9.99,
            'cod_grupo_variacoes' => 36,
        ]);

        //--
        DB::table('Variacoes')->insert([
            'nome' => 'Normal',
            'valor' => 9.99,
            'cod_grupo_variacoes' => 37,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Feijoada',
            'valor' => 9.99,
            'cod_grupo_variacoes' => 37,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Carioca',
            'valor' => 9.99,
            'cod_grupo_variacoes' => 37,
        ]);

        //--
        DB::table('Variacoes')->insert([
            'nome' => 'Frango',
            'valor' => 3.00,
            'cod_grupo_variacoes' => 38,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Bife',
            'valor' => 3.00,
            'cod_grupo_variacoes' => 38,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Linguiça',
            'valor' => 3.00,
            'cod_grupo_variacoes' => 38,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Ovo',
            'valor' => 2.00,
            'cod_grupo_variacoes' => 38,
        ]);

        //--
        DB::table('Variacoes')->insert([
            'nome' => 'Batata Frita',
            'valor' => 4.00,
            'cod_grupo_variacoes' => 39,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Iscas de Frango',
            'valor' => 8.00,
            'cod_grupo_variacoes' => 39,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Calabresa',
            'valor' => 8.00,
            'cod_grupo_variacoes' => 39,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Iscas de Peixe',
            'valor' => 5.00,
            'cod_grupo_variacoes' => 39,
        ]);

        //--
        DB::table('Variacoes')->insert([
            'nome' => 'Alface',
            'valor' => 2.00,
            'cod_grupo_variacoes' => 40,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Tomate',
            'valor' => 2.00,
            'cod_grupo_variacoes' => 40,
        ]);

        DB::table('Variacoes')->insert([
            'nome' => 'Colve',
            'valor' => 2.00,
            'cod_grupo_variacoes' => 40,
        ]);
    }
}
