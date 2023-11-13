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
            'nome' => '',
            'descricao' => '',
            'cod_categoria' => 2,
        ]);

        // $faker = Factory::create();
        // $categorias = DB::table('Categorias')->pluck('id')->toArray();
        // unset($categorias[5]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Marmita Personalizada',
        //     'descricao' => 'Uma marmita totalmente personálizavel, escolha oque você quiser.',
        //     'cod_categoria' => 6,
        // ]);
        // for ($i = 1; $i <= 10; $i++) {
        //     DB::table('Produtos')->insert([
        //         'nome' => $faker->word(),
        //         'descricao' => $faker->sentence(),
        //         'cod_categoria' => $faker->randomElement($categorias),
        //     ]);
        // }

        // Categoria 6: 'Marmita Personalizada'
        // DB::table('Produtos')->insert([
        //     'nome' => 'Marmita Personalizada',
        //     'descricao' => 'Marmita totalmente personalizável, aproveite.',
        //     'cod_categoria' => 6,
        // ]);

        // // Categoria 1: 'Marmita Pronta'
        // DB::table('Produtos')->insert([
        //     'nome' => 'Marmita de Frango Grelhado',
        //     'descricao' => 'Uma marmita de frango grelhado com legumes',
        //     'cod_categoria' => 1,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Marmita de Carne Assada',
        //     'descricao' => 'Uma marmita de carne assada com batatas',
        //     'cod_categoria' => 1,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Marmita de Peixe ao Molho',
        //     'descricao' => 'Uma marmita de peixe ao molho com arroz',
        //     'cod_categoria' => 1,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Marmita de Vegetais Salteados',
        //     'descricao' => 'Uma marmita de vegetais salteados com tofu',
        //     'cod_categoria' => 1,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Marmita de Massa à Bolonhesa',
        //     'descricao' => 'Uma marmita de massa à bolonhesa',
        //     'cod_categoria' => 1,
        // ]);

        // // Categoria 2: 'Bebida'
        // DB::table('Produtos')->insert([
        //     'nome' => 'Suco de Laranja Natural',
        //     'descricao' => 'Suco de laranja natural e fresco',
        //     'cod_categoria' => 2,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Água Mineral',
        //     'descricao' => 'Garrafa de água mineral gelada',
        //     'cod_categoria' => 2,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Refrigerante de Cola',
        //     'descricao' => 'Lata de refrigerante de cola',
        //     'cod_categoria' => 2,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Chá Gelado de Pêssego',
        //     'descricao' => 'Chá gelado de pêssego enlatado',
        //     'cod_categoria' => 2,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Café Expresso',
        //     'descricao' => 'Café expresso forte e encorpado',
        //     'cod_categoria' => 2,
        // ]);

        // // Categoria 3: 'Sobremesa'
        // DB::table('Produtos')->insert([
        //     'nome' => 'Torta de Chocolate',
        //     'descricao' => 'Uma deliciosa torta de chocolate',
        //     'cod_categoria' => 3,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Sorvete de Baunilha',
        //     'descricao' => 'Sorvete de baunilha cremoso',
        //     'cod_categoria' => 3,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Cheesecake de Morango',
        //     'descricao' => 'Cheesecake com cobertura de morango',
        //     'cod_categoria' => 3,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Pudim de Caramelo',
        //     'descricao' => 'Pudim de caramelo caseiro',
        //     'cod_categoria' => 3,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Mousse de Limão',
        //     'descricao' => 'Mousse de limão refrescante',
        //     'cod_categoria' => 3,
        // ]);

        // // Categoria 4: 'Combos'
        // DB::table('Produtos')->insert([
        //     'nome' => 'Combo Familiar',
        //     'descricao' => 'Combo com várias marmitas e bebidas',
        //     'cod_categoria' => 4,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Combo Fitness',
        //     'descricao' => 'Combo com marmitas fitness e sobremesas',
        //     'cod_categoria' => 4,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Combo Vegetariano',
        //     'descricao' => 'Combo com marmitas vegetarianas e sucos',
        //     'cod_categoria' => 4,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Combo Especial',
        //     'descricao' => 'Combo com marmitas especiais e sobremesas',
        //     'cod_categoria' => 4,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Combo Infantil',
        //     'descricao' => 'Combo com marmitas infantis e brindes',
        //     'cod_categoria' => 4,
        // ]);

        // // Categoria 5: 'Acompanhamento'
        // DB::table('Produtos')->insert([
        //     'nome' => 'Batatas Fritas',
        //     'descricao' => 'Porção de batatas fritas crocantes',
        //     'cod_categoria' => 5,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Salada Caesar',
        //     'descricao' => 'Salada Caesar fresca com molho especial',
        //     'cod_categoria' => 5,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Pão de Alho',
        //     'descricao' => 'Pão de alho grelhado na brasa',
        //     'cod_categoria' => 5,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Arroz Branco',
        //     'descricao' => 'Porção de arroz branco soltinho',
        //     'cod_categoria' => 5,
        // ]);

        // DB::table('Produtos')->insert([
        //     'nome' => 'Legumes Grelhados',
        //     'descricao' => 'Legumes grelhados e temperados',
        //     'cod_categoria' => 5,
        // ]);
    }
}
