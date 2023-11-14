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
            'imagem' => 'monte_sua_marmitex.avif'
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Bife Acebolado e Fritas',
            'descricao' => 'Arroz, feijão, bife acebolado e fritas',
            'cod_categoria' => 2,
            'imagem' => 'bife_acebolado_batata.avif'
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Bife Acebolado e Purê de Batata',
            'descricao' => 'Arroz, feijão, bife acebolado e purê de batata caseiro',
            'cod_categoria' => 2,
            'imagem' => 'bife_acebolado_pure.avif'
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Carne de Panela com Batata, Farofa e Ovo Frito',
            'descricao' => 'Arroz, feijão, carne de panela com batata, farofa de calabresa e ovo frito',
            'cod_categoria' => 2,
            'imagem' => 'carne_de_panela.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Panqueca de Frango, Farofa de Calabresa e Fritas Palito',
            'descricao' => 'Arroz, feijão, panqueca de frango, farofa de calabresa e fritas palito',
            'cod_categoria' => 2,
            'imagem' => 'panqueca.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Peixe à Milanesa (Panagssius), Purê de Batata',
            'descricao' => 'Arroz, feijão, peixe à milanesa e purê de batata',
            'cod_categoria' => 2,
            'imagem' => 'peixe_a_milanesa.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Arroz, Strogonoff de Frango, Batata Palha (Sem Feijão)',
            'descricao' => 'Arroz, strogonoff de frango, batata palha (não acompanha salada)',
            'cod_categoria' => 2,
            'imagem' => 'strogonoff.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Filé de Frango à Milanesa e Ovo Frito',
            'descricao' => 'Arroz, feijão, filé de frango à milanesa e ovo frito',
            'cod_categoria' => 2,
            'imagem' => 'frango_a_milanesa.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Filé de Frango à Milanesa e Salada de Maionese',
            'descricao' => 'Arroz, feijão, filé à milanesa, salada de maionese que é enviada potinho à parte da marmitex',
            'cod_categoria' => 2,
            'imagem' => 'file_a_milaneza_maionese.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Marmitex Pequena de Filé de Frango Grelhado e Ovo Frito',
            'descricao' => 'Arroz, feijão, filé de frango grelhado com cebola e ovo frito (não acompanha salada)',
            'cod_categoria' => 2,
            'imagem' => 'file_de_frango_grelhado.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Mini Marmita Maionese 250g',
            'descricao' => 'Deliciosa porção de maionese, feita todos os dias fresquinha',
            'cod_categoria' => 2,
            'imagem' => 'mini_maionese.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => '2 Marmitex Filé Milanesa e Ovo Frito',
            'descricao' => 'Arroz, feijão, filé de frango à milanesa e ovo frito',
            'cod_categoria' => 2,
            'imagem' => 'frango_a_milanesa.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => '2 Marmitex Bife Acebolado e Ovo Frito',
            'descricao' => 'Arroz, feijão, bife acebolado e ovo frito',
            'cod_categoria' => 2,
            'imagem' => 'bife_acebolado_ovo.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => '200g Maionese',
            'descricao' => 'Deliciosa salada de maionese batata, cenoura e cebolinha',
            'cod_categoria' => 2,
            'imagem' => 'maionese.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Bife Parmegiana, Farofa de Calabresa, Batata Palha e Arroz (Sem Feijão)',
            'descricao' => 'Arroz, bife parmegiana, farofa de calabresa, batata palha',
            'cod_categoria' => 3,
            'imagem' => 'parmegiana.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Parmegiana de Frango, Farofa de Calabresa e Batata Palha (Sem Feijão)',
            'descricao' => 'Arroz, filé de frango parmegiana, batata palha e farofa de calabresa',
            'cod_categoria' => 3,
            'imagem' => 'parmegiana.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Filé de Frango Parmegiana e Fritas (Sem Feijão)',
            'descricao' => 'Delicioso filé de frango parmegiana preparado na hora, fritas e uma salada para acompanhar seu almoço',
            'cod_categoria' => 3,
            'imagem' => 'parmegiana.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Almôndega de Soja ao Molho, Purê de Batata e Mini Salada Simples',
            'descricao' => 'Arroz, feijão, almôndega de soja ao molho sugo, purê de batata e salada alface, tomate e cebola',
            'cod_categoria' => 4,
            'imagem' => 'almondega_vegana.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Espaguete ao Sugo e Omelete de Queijo com Tomate',
            'descricao' => 'Marmitex pequena de espaguete ao sugo e omelete de queijo com tomate',
            'cod_categoria' => 4,
            'imagem' => 'espaguete_ao_sugo.avif'
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Ovos à Parmegiana, Fritas e Maionese (Sem Feijão)',
            'descricao' => 'Arroz, 2 ovos à parmegiana, fritas e maionese',
            'cod_categoria' => 4,
            'imagem' => 'parmegiana.avif'
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
            'imagem' => 'calabresa_acebolada.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Mini Salada Simples (Alface, Tomate e Cebola)',
            'descricao' => 'Alface, tomate e cebola',
            'cod_categoria' => 5,
            'imagem' => 'salada_simples.avif'

        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Coca Cola 1,5 L',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Mini Refrigerante',
            'descricao' => '',
            'cod_categoria' => 6,
            'imagem' => 'mini_refrigerante.avif'
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Refrigerante 600 ml',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Refrigerante Lata',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Suco de Laranja com Açúcar e com Gelo 300 ml',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Suco de Laranja com Açúcar e com Gelo 500 ml',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Suco de Laranja com Açúcar e com Gelo 500 ml',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Suco de Maracujá 500 ml',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Suco Polpa 500 ml Laranja com Acerola',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Tuiubaina - 350 ml',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Tuiubaina 2 Litros',
            'descricao' => '',
            'cod_categoria' => 6,
        ]);

        DB::table('Produtos')->insert([
            'nome' => 'Combo Fit de Frango, Arroz Integral, Refogado, Mini Salada e Suco Rosa 300 ml Nat',
            'descricao' => 'Arroz integral, tirinha de frango grelhado, refogado do dia, mini salada opção do dia, suco 300 ml: laranja, beterraba e cenoura (sem açúcar)',
            'cod_categoria' => 7,
            'imagem' => 'combo_fit.avif'
        ]);

    }
}
