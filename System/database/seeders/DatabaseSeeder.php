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
        $quantidadel_inserts = 3;
        for ($i = 0; $i < $quantidadel_inserts; $i++) {
            $this->call([
                ClienteSeeder::class,
                CupomSeeder::class,
                FuncionarioSeeder::class,
                CategoriaSeeder::class,
                ProdutoSeeder::class,
                EnderecoSeeder::class,
                PedidoSeeder::class,
                GrupoVariacaoSeeder::class,
                VariacaoSeeder::class,
                PedidoProdutoSeeder::class,
                PedidoProdutoGrupoVariacaoSeeder::class,
                VariacaoSelecionadaSeeder::class
            ]);
        }
    }
}
