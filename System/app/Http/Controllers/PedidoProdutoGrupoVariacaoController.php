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
            'quantidade' => ['required', 'integer', 'max_digits:30'],
            'cod_pedido_produto' => ['required', 'integer', 'max_digits:30']

        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $ped_prod_grupo_var = PedidoProdutoGrupoVariacao::create([
            'quantidade' => $request->input('quantidade'),
            'cod_pedido_produto' => $request->input('cod_pedido_produto'),
            'cod_produto' => $request->input('cod_produto')
        ]);

        return response()->json($ped_prod_grupo_var, 201);
    }

    /**
     * update
     *
     * @return PedidoProdutoGrupoVariacao
     */

     public function update(Request $request) {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'quantidade' => ['required', 'integer', 'max_digits:30']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $variacao_selecionada = PedidoProdutoGrupoVariacao::find($request->input('id'));
        $variacao_selecionada->quantidade = $request->input('quantidade');
        $variacao_selecionada->save();

        return response()->json($variacao_selecionada, 200);
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

    /**
     * storeVariacaoSelecionada
     *
     * @return void
     */

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

        return response()->json($variacao_selecionada, 201);
    }

    /**
     * updateVariacaoSelecionada
     *
     * @return VariacaoSelecionada
     */

     public function updateVariacaoSelecionada(Request $request) {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'cod_variacao' => ['required', 'integer', 'max_digits:30']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $variacao_selecionada = VariacaoSelecionada::find($request->input('id'));
        $variacao_selecionada->cod_variacao = $request->input('cod_variacao');
        $variacao_selecionada->save();

        return response()->json($variacao_selecionada, 200);
    }

    /**
     * destroyVariacaoSelecionada
     *
     * @return void
     */

     public function destroyVariacaoSelecionada(int $id) {
        $variacao_selecionada = VariacaoSelecionada::find($id);

        if(!$variacao_selecionada)
            return response()->json(['message' => 'Variação Selecionada inválida'], 422);

        $variacao_selecionada::find($id)->delete();
        return response()->json(['message' => 'Variacao Selecionada deletada com sucesso'], 204);
    }

}
