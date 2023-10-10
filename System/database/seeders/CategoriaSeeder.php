<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nomes = ['Marmita Pronta', 'Bebida', 'Sobremesa', 'Combos', 'Acompanhamento'];
        foreach ($nomes as $nome) {
            DB::table('Categorias')->insert([
                'nome' => $nome,
            ]);
        }
    }
}
