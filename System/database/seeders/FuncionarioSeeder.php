<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class FuncionarioSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        for($i =1;$i <= 10;$i++) {
            DB::table('Funcionarios')->insert([
                'nome' => $faker->name(),
                'email' => $faker->email(),
                'password' => Hash::make('none'),
                'nivel_acesso' => $faker->randomElement(['1', '2', '3'])
            ]);
        }
    }
}