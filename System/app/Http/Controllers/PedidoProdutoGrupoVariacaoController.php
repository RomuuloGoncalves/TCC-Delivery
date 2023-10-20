<?php

namespace App\Http\Controllers;

use App\Models\GrupoVariacao;
use App\Models\PedidoProdutoGrupoVariacao;
use App\Models\VariacaoSelecionada;
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

        $endereco = PedidoProdutoGrupoVariacao::create([
            'tipo' => $request->input('tipo'),
            'quantidade_variacoes' => $request->input('quantidade_variacoes'),
            'cod_produto' => $request->input('cod_produto')
        ]);

        return response()->json($endereco, 201);
    }

    /**
     * index
     *
     * @return PedidoProdutoGrupoVariacao[]
     */

    public function index() {
        $ped_prod_grupo_vars = PedidoProdutoGrupoVariacao::all();
        foreach($ped_prod_grupo_vars as $ped_prod_grupo_var) {
            $ped_prod_grupo_var->variacao_selecionadas = VariacaoSelecionada::with(['variacao'])->where('cod_pedido_produto_grupo_variacoes', $ped_prod_grupo_var->id)->get();
            foreach($ped_prod_grupo_var->variacao_selecionadas as $variacao_selecionada) {
                $grupo_variacao = GrupoVariacao::find($variacao_selecionada->variacao->cod_grupo_variacoes);
                $variacao_selecionada->variacao->grupo_variacao = $grupo_variacao->tipo;
            }
        }
        return response()->json($ped_prod_grupo_vars, 200);
    }

    /**
     * show
     *
     * @return PedidoProdutoGrupoVariacao
     */

    public function show(int $id) {
        $ped_prod_grupo_var = PedidoProdutoGrupoVariacao::find($id);
        $ped_prod_grupo_var->variacao_selecionadas = VariacaoSelecionada::with(['variacao'])->where('cod_pedido_produto_grupo_variacoes', $id)->get();
        foreach($ped_prod_grupo_var->variacao_selecionadas as $variacao_selecionada) {
            $grupo_variacao = GrupoVariacao::find($variacao_selecionada->variacao->cod_grupo_variacoes);
            $variacao_selecionada->variacao->grupo_variacao = $grupo_variacao->tipo;
        }
        return response()->json($ped_prod_grupo_var, 200);
    }
}
