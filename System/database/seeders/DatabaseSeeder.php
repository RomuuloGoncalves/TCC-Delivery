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
            EnderecoSeeder::class,
            FuncionarioSeeder::class,
            PedidoSeeder::class,
            ProdutoSeeder::class,
            VariacaoSeeder::class,
            GrupoVariacaoSeeder::class,
            PedidoProdutoSeeder::class,
            PedidoProdutoGrupoVariacaoSeeder::class
        ]);
    }
}
