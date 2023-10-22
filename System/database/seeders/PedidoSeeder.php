<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PedidoSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();
        $clientes = DB::table('Clientes')->pluck('id')->toArray();
        $funcionarios = DB::table('Funcionarios')->pluck('id')->toArray();
        $enderecos = DB::table('Enderecos')->pluck('id')->toArray();
        $cupons = DB::table('Cupons')->pluck('id')->toArray();

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Pedidos')->insert([
                'valor_total' => $faker->randomFloat(2, 1, 100000),
                'valor_com_desconto' => $faker->randomFloat(2, 1, 100000),
                'data_pedido' => $faker->dateTime(),
                'data_entrega' => $faker->dateTime(),
                'data_pagamento' => $faker->dateTime(),
                'endereco_pedido' => $faker->sentence(3),
                'status' => $faker->randomElement(['Pronto', 'Em Entrega', 'Cancelado', 'Em Espera']),
                'forma_pagamento' => $faker->randomElement( ['Crédito', 'Dinheiro', 'Pix', 'Débito']),
                'cod_cliente' => $faker->randomElement($clientes),
                'cod_funcionario' => $faker->randomElement($funcionarios),
                'cod_endereco' => $faker->randomElement($enderecos),
                'cod_cupom' => $faker->randomElement($cupons),
            ]);
        }
    }
}
