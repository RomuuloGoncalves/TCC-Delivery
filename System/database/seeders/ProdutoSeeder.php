<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdutoSeeder extends Seeder
{
    public function run()
    {
        DB::table('Produtos')->insert([
            'nome' => 'Marmita Personalizada',
            'descricao' => 'Uma marmita totalmente personálizavel, escolha o que você quiser.',
            'cod_categoria' => 1,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Bife Acebolado e Fritas',
            'descricao' => 'Arroz, feijão, bife acebolado e fritas',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Bife Acebolado e Purê de Batata',
            'descricao' => 'Arroz, feijão, bife acebolado e purê de batata caseiro',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Carne de Panela com Batata, Farofa e Ovo Frito',
            'descricao' => 'Arroz, feijão, carne de panela com batata, farofa de calabresa e ovo frito',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Panqueca de Frango, Farofa de Calabresa e Fritas Palito',
            'descricao' => 'Arroz, feijão, panqueca de frango, farofa de calabresa e fritas palito',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Peixe à Milanesa (Panagssius), Purê de Batata',
            'descricao' => 'Arroz, feijão, peixe à milanesa e purê de batata',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Arroz, Strogonoff de Frango, Batata Palha (Sem Feijão)',
            'descricao' => 'Arroz, strogonoff de frango, batata palha (não acompanha salada)',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Filé de Frango à Milanesa e Ovo Frito',
            'descricao' => 'Arroz, feijão, filé de frango à milanesa e ovo frito',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Filé de Frango à Milanesa e Salada de Maionese',
            'descricao' => 'Arroz, feijão, filé à milanesa, salada de maionese que é enviada potinho à parte da marmitex',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Filé de Frango Grelhado e Ovo Frito',
            'descricao' => 'Arroz, feijão, filé de frango grelhado com cebola e ovo frito (não acompanha salada)',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Mini Marmita Maionese 250g',
            'descricao' => 'Deliciosa porção de maionese, feita todos os dias fresquinha',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => '2 Marmitex P= Filé Milanesa e Ovo Frito',
            'descricao' => 'Arroz, feijão, filé de frango à milanesa e ovo frito',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => '2 Marmitex P= Bife Acebolado e Ovo Frito',
            'descricao' => 'Arroz, feijão, bife acebolado e ovo frito',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => '200g Maionese',
            'descricao' => 'Deliciosa salada de maionese batata, cenoura e cebolinha',
            'cod_categoria' => 2,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Bife Parmegiana, Farofa de Calabresa, Batata Palha e Arroz (Sem Feijão)',
            'descricao' => 'Arroz, bife parmegiana, farofa de calabresa, batata palha',
            'cod_categoria' => 3,
        ]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Parmegiana de Frango, Farofa de Calabresa e Batata Palha (Sem Feijão)',
            'descricao' => 'Arroz, filé de frango parmegiana, batata palha e farofa de calabresa',
            'cod_categoria' => 3,
        ]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Filé de Frango Parmegiana e Fritas (Sem Feijão)',
            'descricao' => 'Delicioso filé de frango parmegiana preparado na hora, fritas e uma salada para acompanhar seu almoço',
            'cod_categoria' => 3,
        ]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Almôndega de Soja ao Molho, Purê de Batata e Mini Salada Simples',
            'descricao' => 'Arroz, feijão, almôndega de soja ao molho sugo, purê de batata e salada alface, tomate e cebola',
            'cod_categoria' => 4,
        ]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Espaguete ao Sugo e Omelete de Queijo com Tomate',
            'descricao' => 'Marmitex pequena de espaguete ao sugo e omelete de queijo com tomate',
            'cod_categoria' => 4,
        ]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Ovos à Parmegiana, Fritas e Maionese (Sem Feijão)',
            'descricao' => 'Arroz, 2 ovos à parmegiana, fritas e maionese',
            'cod_categoria' => 4,
        ]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Arroz 500g',
            'descricao' => 'Serve 2 pessoas',
            'cod_categoria' => 5,
        ]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Calabresa Acebolada 250g',
            'descricao' => 'Calabresa acebolada',
            'cod_categoria' => 5,
        ]);
        
        DB::table('Produtos')->insert([
            'nome' => 'Mini Salada Simples (Alface, Tomate e Cebola)',
            'descricao' => 'Alface, tomate e cebola',
            'cod_categoria' => 5,
        ]);       
                       
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);
                               
        DB::table('Produtos')->insert([
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 7,
        ]);
    }
}