<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ClienteSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();
        

        // for ($i = 1; $i <= 10; $i++) {
        //     DB::table('Clientes')->insert([
        //         'nome' => $faker->name(),
        //         'email' => $faker->email(),
        //         'password' => Hash::make('none'),
        //         'telefone' => $faker->numerify('1599#######'),
        //         'image' => $faker->imageUrl(640, 480, 'animals', true)
        //     ]);
        // }


        DB::table('Clientes')->insert([
            'nome' => 'Ana Silva',
            'email' => 'ana.silva@example.com',
            'password' => Hash::make('senha123'),
            'telefone' => '1234567890',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'João Santos',
            'email' => 'joao.santos@example.com',
            'password' => Hash::make('senha456'),
            'telefone' => '9876543210',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Mariana Souza',
            'email' => 'mariana.souza@example.com',
            'password' => Hash::make('senha789'),
            'telefone' => '5555555555',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Pedro Oliveira',
            'email' => 'pedro.oliveira@example.com',
            'password' => Hash::make('senhaabc'),
            'telefone' => '7777777777',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Luiza Pereira',
            'email' => 'luiza.pereira@example.com',
            'password' => Hash::make('senhaxyz'),
            'telefone' => '9999999999',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Ricardo Carvalho',
            'email' => 'ricardo.carvalho@example.com',
            'password' => Hash::make('senha1234'),
            'telefone' => '1231231234',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Juliana Ribeiro',
            'email' => 'juliana.ribeiro@example.com',
            'password' => Hash::make('senha5678'),
            'telefone' => '9879879876',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Fernando Barbosa',
            'email' => 'fernando.barbosa@example.com',
            'password' => Hash::make('senha9012'),
            'telefone' => '1112223333',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Camila Neves',
            'email' => 'camila.neves@example.com',
            'password' => Hash::make('senhazxcv'),
            'telefone' => '4445556666',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Gustavo Gomes',
            'email' => 'gustavo.gomes@example.com',
            'password' => Hash::make('senha5678'),
            'telefone' => '8889990000',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Isabel Lima',
            'email' => 'isabel.lima@example.com',
            'password' => Hash::make('senhamnop'),
            'telefone' => '1239874560',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Felipe Costa',
            'email' => 'felipe.costa@example.com',
            'password' => Hash::make('senha1234'),
            'telefone' => '4441112222',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Mariana Almeida',
            'email' => 'mariana.almeida@example.com',
            'password' => Hash::make('senha5678'),
            'telefone' => '1239994567',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Gustavo Rodrigues',
            'email' => 'gustavo.rodrigues@example.com',
            'password' => Hash::make('senha9012'),
            'telefone' => '5554446666',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Camila Gomes',
            'email' => 'camila.gomes@example.com',
            'password' => Hash::make('senhaxyz'),
            'telefone' => '1113337777',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Roberto Fernandes',
            'email' => 'roberto.fernandes@example.com',
            'password' => Hash::make('senha4321'),
            'telefone' => '6661114444',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Laura Carvalho',
            'email' => 'laura.carvalho@example.com',
            'password' => Hash::make('senhazxcv'),
            'telefone' => '7778889999',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Ricardo Ferreira',
            'email' => 'ricardo.ferreira@example.com',
            'password' => Hash::make('senha5678'),
            'telefone' => '1239876543',
        ]);

        DB::table('Clientes')->insert([
            'nome' => 'Eduardo Amaral',
            'email' => 'eduardo.amaral@example.com',
            'password' => Hash::make('senhatrue'),
            'telefone' => '5556667777',
        ]);
    }
}
