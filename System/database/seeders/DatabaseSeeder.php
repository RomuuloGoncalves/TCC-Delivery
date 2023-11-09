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
        $this->call(FuncionarioSeeder::class);

        $quantidadel_inserts = 1;
        for ($i = 0; $i < $quantidadel_inserts; $i++) {
            $this->call([
                // ClienteSeeder::class,
                // CupomSeeder::class,
                CategoriaSeeder::class,
                // ProdutoSeeder::class,
                // EnderecoSeeder::class,
                // PedidoSeeder::class,
                // GrupoVariacaoSeeder::class,
                // VariacaoSeeder::class,
                // PedidoProdutoSeeder::class,
                // VariacaoSelecionadaSeeder::class
            ]);
        }
    }
}
