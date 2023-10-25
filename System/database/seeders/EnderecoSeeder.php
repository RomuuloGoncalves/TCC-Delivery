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
        //     $faker = Factory::create();
        //     $clientes = DB::table('Clientes')->pluck('id')->toArray();

        //     for($i =1;$i <= 10;$i++) {
        //         DB::table('Enderecos')->insert([
        //             'nome' => $faker->word(),
        //             'complemento' => $faker->sentence(5),
        //             'bairro' => $faker->sentence(2),
        //             'numero' => $faker->numerify('##'),
        //             'rua' => $faker->sentence('2'),
        //             'cep' => $faker->numerify('########'),
        //             'cod_cliente' => $faker->randomElement($clientes)
        //         ]);
        //     }

        //     for($i =1;$i <= 10;$i++) {
        //         DB::table('Enderecos')->insert([
        //             'nome' => $faker->word(),
        //             'complemento' => $faker->sentence(2),
        //             'bairro' => $faker->sentence(2),
        //             'numero' => $faker->numerify('##'),
        //             'rua' => $faker->sentence('2'),
        //             'cep' => $faker->numerify('########'),
        //             'cod_cliente' => 1
        //         ]);
        //     }

        DB::table('Enderecos')->insert([
            'nome' => 'Casa',
            'complemento' => null,
            'bairro' => 'Bairro A',
            'numero' => '123',
            'rua' => 'Rua Principal',
            'cep' => '18000000',
            'cod_cliente' => 1,
        ]);

        DB::table('Enderecos')->insert([
            'nome' => 'Trabalho',
            'complemento' => 'Sala 301',
            'bairro' => 'Bairro B',
            'numero' => '456',
            'rua' => 'Avenida Secundária',
            'cep' => '18000001',
            'cod_cliente' => 1,
        ]);

        DB::table('Enderecos')->insert([
            'nome' => 'Casa de Praia',
            'complemento' => null,
            'bairro' => 'Bairro C',
            'numero' => '789',
            'rua' => 'Rua da Praia',
            'cep' => '18000002',
            'cod_cliente' => 1,
        ]);

        DB::table('Enderecos')->insert([
            'nome' => 'Escritório',
            'complemento' => 'Andar 10',
            'bairro' => 'Bairro D',
            'numero' => '101',
            'rua' => 'Avenida Principal',
            'cep' => '18000003',
            'cod_cliente' => 2,
        ]);

        DB::table('Enderecos')->insert([
            'nome' => 'Casa',
            'complemento' => null,
            'bairro' => 'Bairro E',
            'numero' => '222',
            'rua' => 'Rua da Esquina',
            'cep' => '18000004',
            'cod_cliente' => 2,
        ]);

        DB::table('Enderecos')->insert([
            'nome' => 'Academia',
            'complemento' => null,
            'bairro' => 'Bairro F',
            'numero' => '333',
            'rua' => 'Avenida da Academia',
            'cep' => '18000005',
            'cod_cliente' => 2,
        ]);

        DB::table('Enderecos')->insert([
            'nome' => 'Trabalho',
            'complemento' => 'Sala 4',
            'bairro' => 'Bairro F',
            'numero' => '333',
            'rua' => 'Rua do Trabalho',
            'cep' => '18000006',
            'cod_cliente' => 3,
        ]);

        DB::table('Enderecos')->insert([
            'nome' => 'Restaurante',
            'complemento' => null,
            'bairro' => 'Bairro F',
            'numero' => '333',
            'rua' => 'Avenida do Restaurante',
            'cep' => '18000007',
            'cod_cliente' => 3,
        ]);

        DB::table('Enderecos')->insert([
            'nome' => 'Casa',
            'complemento' => 'Sala 102',
            'bairro' => 'Bairro F',
            'numero' => '333',
            'rua' => 'Pista da Casa',
            'cep' => '18000008',
            'cod_cliente' => 3,
        ]);
    }
}
