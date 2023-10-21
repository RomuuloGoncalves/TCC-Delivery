<?php

namespace App\Http\Controllers;

use App\Models\GrupoVariacao;
use App\Models\PedidoProdutoGrupoVariacao;
use App\Models\VariacaoSelecionada;
use App\Models\Variacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PedidoProdutoGrupoVariacaoController extends Controller
{
    public function __construct() {}
    
    /**
     * store
     *
     * @return void
     */

    public function store(Request $request) {
        $regras = [
            'tipo' => ['required', 'integer', 'max_digits:30'],
            'quantidade_variacoes' => ['required', 'integer', 'max_digits:30'],
            'cod_produto' => ['required', 'integer', 'max_digits:30']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $ped_prod_grupo_var = PedidoProdutoGrupoVariacao::create([
            'tipo' => $request->input('tipo'),
            'quantidade_variacoes' => $request->input('quantidade_variacoes'),
            'cod_produto' => $request->input('cod_produto')
        ]);

        return response()->json($ped_prod_grupo_var, 201);
    }

    public function storeVariacaoSelecionada(Request $request) {
        $regras = [
            'cod_pedido_produto_grupo_variacoes' => ['required', 'integer', 'max_digits:30'],
            'cod_variacao' => ['required', 'integer', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $variacao_selecionada = VariacaoSelecionada::create([
            'cod_pedido_produto_grupo_variacoes' => $request->input('cod_pedido_produto_grupo_variacoes'),
            'cod_variacao' => $request->input('cod_variacao')
        ]);

        return response()->json($ped_prod_grupo_var, 201);
    }

    /**
     * index
     *
     * @return PedidoProdutoGrupoVariacao[]
     */

    public function index() {
        $ped_prod_grupo_vars = PedidoProdutoGrupoVariacao::with(['variacoes_selecionadas.variacao.grupo_variacao' => 
            function($query) {
            $query->select('id', 'tipo');
        }])->get();
        
        return response()->json($ped_prod_grupo_vars, 200);
    }

    /**
     * show
     *
     * @return PedidoProdutoGrupoVariacao
     */

    public function show(int $id) {
        $ped_prod_grupo_var = PedidoProdutoGrupoVariacao::with(['variacoes_selecionadas.variacao.grupo_variacao' => 
            function($query) {
            $query->select('id', 'tipo');
        }])->where('id', $id)->get();
        
        return response()->json($ped_prod_grupo_var, 200);
    }
}
