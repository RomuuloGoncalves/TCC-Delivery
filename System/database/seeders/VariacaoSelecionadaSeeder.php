<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\PedidoProduto;

class VariacaoSelecionadaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        // $pedido_produto = DB::table('Pedido_produtos')->pluck('id')->toArray();


        for ($i = 1; $i <= 10; $i++) {
            $pedidoProduto = PedidoProduto::with(['produto.grupo_variacao.variacao'])
                ->where('id', $i)
                ->first();

            $id_variacoes = [];

            foreach ($pedidoProduto->produto->grupo_variacao as $item) {
                foreach ($item->variacao as $variacao) {
                    $id_variacoes[] = $variacao->id;
                }
            }

            DB::table('Variacao_selecionadas')->insert([
                'cod_pedido_produto' => $i,
                'cod_variacao' => $faker->randomElement($id_variacoes),
            ]);

            DB::table('Variacao_selecionadas')->insert([
                'cod_pedido_produto' => $i,
                'cod_variacao' => $faker->randomElement($id_variacoes),
            ]);
        }

        DB::table('Variacao_selecionadas')->insert([
            'cod_pedido_produto' => 21,
            'cod_variacao' => 15,
        ]);

        DB::table('Variacao_selecionadas')->insert([
            'cod_pedido_produto' => 22,
            'cod_variacao' => 37,
        ]);
    }
}
