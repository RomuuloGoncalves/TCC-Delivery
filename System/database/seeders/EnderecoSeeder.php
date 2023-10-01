<?php

namespace Database\Seeders;

use App\Models\Cliente;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EnderecoSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();
        $clientes = DB::table('Clientes')->pluck('id')->toArray();

        for($i =1;$i <= 10;$i++) {
            DB::table('Enderecos')->insert([
                'nome' => $faker->word(),
                'complemento' => $faker->sentence(5),
                'bairro' => $faker->sentence(2),
                'numero' => $faker->numerify('##'),
                'rua' => $faker->sentence('2'),
                'cep' => $faker->numerify('########'),
                'cod_cliente' => $faker->randomElement($clientes)
            ]);
        }
    }
}
