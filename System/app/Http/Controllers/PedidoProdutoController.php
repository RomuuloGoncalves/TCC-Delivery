<?php

namespace App\Http\Controllers;
use App\Models\PedidoProduto;
use App\Models\VariacaoSelecionada;
use App\Models\Pedido;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PedidoProdutoController extends Controller
{
    /**
     * store
     *
     * @return void
     */

    public function store(Request $request) {
        $regras = [
            'cod_produto' => ['required', 'integer', 'max_digits:30'],
            'quantidade' => ['nullable', 'integer', 'min: 1', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        if (!$cliente = ClienteController::getAuthCliente()) {
            return response()->json(["Cliente Inválido", 422]);
        }

        if(!$pedido = Pedido::where('cod_cliente', $cliente->id)->where('status', 'Carrinho')->first()) {
            $pedido = PedidoController::store();
        }

        $pedido_produto = PedidoProduto::create([
            'cod_pedido' => $pedido->id,
            'cod_produto' => $request->input('cod_produto'),
            'quantidade' => $request->input('quantidade')
        ]);


        return response()->json([$pedido_produto], 201);
    }

    /**
     * update
     *
     * @return PedidoProduto
     */

    public function update(Request $request) {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'quantidade' => ['required', 'integer', 'max_digits:30']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $pedido_produto = PedidoProduto::find($request->input('id'));
        $pedido_produto->quantidade = $request->input('quantidade');
        $pedido_produto->save();

        return response()->json($pedido_produto, 200);
    }

    /**
     * index
     *
     * @return PedidoProduto[]
     */

    public function index() {
        $pedido_produto = PedidoProduto::with(['variacoes_selecionadas.variacao.grupo_variacao' =>
            function($query) {
            $query->select('id', 'tipo');
        }])->get();

        return response()->json($pedido_produto, 200);
    }

    /**
     * show
     *
     * @return PedidoProduto
     */

    public function show(int $id) {
        $pedido_produto = PedidoProduto::with(['variacoes_selecionadas.variacao.grupo_variacao' =>
            function($query) {
            $query->select('id', 'tipo');
        }])->where('id', $id)->get();

        return response()->json($pedido_produto, 200);
    }

    /**
     * destroy
     *
     * @return void
     */

    public function destroy(int $id) {
        $pedido_produto = PedidoProduto::find($id);

        if(!$pedido_produto)
            return response()->json(['message' => 'Pedido Produto inválido'], 422);

        $pedido_produto::delete();
        return response()->json(['message' => 'Pedido Produto deletado com sucesso'], 204);
    }

    /**
     * storeVariacaoSelecionada
     *
     * @return void
     */

    public function storeVariacaoSelecionada(Request $request) {
        $regras = [
            'cod_pedido_produto' => ['required', 'integer', 'max_digits:30'],
            'cod_variacao' => ['required', 'integer', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $variacao_selecionada = VariacaoSelecionada::create([
            'cod_pedido_produto' => $request->input('cod_pedido_produto_grupo_variacoes'),
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

        $variacao_selecionada::delete();
        return response()->json(['message' => 'Variacao Selecionada deletada com sucesso'], 204);
    }
}
