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

        for ($i = 1; $i <= 10; $i++) {
            DB::table('Clientes')->insert([
                'nome' => $faker->name(),
                'email' => $faker->email(),
                'password' => Hash::make('none'),
                'telefone' => $faker->numerify('1599#######'),
                'image' => $faker->imageUrl(640, 480, 'animals', true)
            ]);
        }
    }
}
