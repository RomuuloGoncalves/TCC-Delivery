<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ClienteSeeder::class,
            CupomSeeder::class,
            FuncionarioSeeder::class,
            VariacaoSeeder::class,
            ProdutoSeeder::class,
            EnderecoSeeder::class,
            PedidoSeeder::class,
            GrupoVariacaoSeeder::class,
            PedidoProdutoSeeder::class,
            PedidoProdutoGrupoVariacaoSeeder::class
        ]);
    }
}
