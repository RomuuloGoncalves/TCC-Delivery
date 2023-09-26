<?php

namespace Database\Seeders;

use App\Models\Cliente;
use App\Models\Cupom;
use App\Models\Endereco;
use App\Models\Funcionario;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PedidoSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();
        $clientes = Cliente::all()->pluck('id')->toArray();
        $funcionarios = Funcionario::all()->pluck('id')->toArray();
        $enderecos = Endereco::all()->pluck('id')->toArray();
        $cupons = Cupom::all()->pluck('id')->toArray();

        for($i =1;$i <= 10;$i++) {
            DB::table('Pedidos')->insert([
                'valor_total' => $faker->randomFloat(2, 1, 100000),
                'valor_com_desconto' => $faker->randomFloat(2, 1, 100000),
                'data_pedido' => $faker->dateTime(),
                'data_entrega' => $faker->dateTime(),
                'data_pagamento' => $faker->dateTime(),
                'endereco' => $faker->sentence(3),
                'status_pedido' => $faker->randomElement(['pronto', 'em entrega', 'cancelado', 'em espera']),
                'forma_pagamento' => $faker->randomElement(['crédito', 'dinheiro', 'pix', 'débito']),
                'cod_cliente' => $faker->randomElement($clientes),
                'cod_funcionario' => $faker->randomElement($funcionarios),
                'cod_endereco' => $faker->randomElement($enderecos),
                'cod_cupom' => $faker->randomElement($cupons)
            ]);
        }
    }
}
