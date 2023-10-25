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

        DB::table('Funcionarios')->insert([
            'nome' => 'Admin',
            'login' => 'admin',
            'password' => Hash::make('12345678'),
            'nivel_acesso' => '3'
        ]);
    }
}
