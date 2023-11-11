<?php

namespace App\Http\Controllers;

use App\Models\GrupoVariacao;
use App\Models\PedidoProduto;
use App\Models\VariacaoSelecionada;
use App\Models\Pedido;
use App\Models\Variacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PedidoProdutoController extends Controller
{
    /**
     * store
     *
     * @return void
     */

    public function store(Request $request)
    {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'quantidade' => ['integer', 'min: 1', 'max_digits:30'],
            'observacao' => ['nullable', 'string', 'max:255'],
            'grupo_variacao' => ['nullable', 'array'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        if (!$cliente = ClienteController::getAuthCliente())
            return response()->json(["Cliente Inválido"], 422);

        if (!$pedido = Pedido::where('cod_cliente', $cliente->id)->where('status', 'Carrinho')->first())
            $pedido = PedidoController::store();

        $total = 0;

        // Verificações
        foreach ($request->input('grupo_variacao') as $grupo_variacao) {
            if (!$grupo_variacao_obj = GrupoVariacao::where('id', $grupo_variacao['id'])->first())
                return response()->json(['message' => 'Grupo variação inválido'], 422);

            $qtdd_variacoes_selecionadas = count($grupo_variacao['variacao']);
            if ($grupo_variacao_obj->quantidade_variacoes_min > $qtdd_variacoes_selecionadas)
                return response()->json(['message' => 'Deves escolher mais ' . $grupo_variacao['tipo']]);

            if ($grupo_variacao_obj->quantidade_variacoes_max < $qtdd_variacoes_selecionadas)
                return response()->json(['message' => 'Deves escolher menos ' . $grupo_variacao['tipo']]);

            foreach ($grupo_variacao['variacao'] as $variacao) {
                if (!$variacao_obj = Variacao::where('cod_grupo_variacoes', $grupo_variacao_obj->id)->where('id', $variacao['id'])->first())
                    return response()->json(['message' => 'Variação inválida'], 422);
                $total += $variacao_obj->valor;
            }
        }

        $pedido_produto = PedidoProduto::create([
            'cod_pedido' => $pedido->id,
            'cod_produto' => $request->input('id'),
            'quantidade' => $request->input('quantidade'),
            'observacao' => $request->input('observacao'),
            'total' => $total
        ]);

        foreach ($request->input('grupo_variacao') as $grupo_variacao) {
            foreach ($grupo_variacao['variacao'] as $variacao) {
                $variacao_selecionada = VariacaoSelecionada::create([
                    'cod_pedido_produto' => $pedido_produto->id,
                    'cod_variacao' => $variacao['id']
                ]);
                $variacao_selecionada->save();
            }
        }
    }

    /**
     * update
     *
     * @return PedidoProduto
     */

    public function update(Request $request)
    {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'quantidade' => ['required', 'integer', 'max_digits:30'],
            'observacao' => ['nullable', 'string', 'max:255']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $pedido_produto = Pedido::find($request->input('id'));

        if (!$pedido_produto)
            return response()->json(['error' => '"Pedido Produto" not found'], 404);

        $atributos = ['quantidade', 'observacao'];

        foreach ($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $pedido_produto->$atributo = $request->input($atributo)
                : null;
        }

        $pedido_produto->save();

        return response()->json($pedido_produto, 200);
    }

    /**
     * index
     *
     * @return PedidoProduto[]
     */

    public function index()
    {
        $pedido_produto = PedidoProduto::with(['variacoes_selecionadas.variacao.grupo_variacao.produto' =>
        function ($query) {
            $query->select('id', 'tipo');
        }])->get();

        return response()->json($pedido_produto, 200);
    }

    /**
     * show
     *
     * @return PedidoProduto
     */

    public function show(int $id)
    {
        $pedido_produto = PedidoProduto::with(['variacoes_selecionadas.variacao.grupo_variacao' =>
        function ($query) {
            $query->select('id', 'tipo');
        }])->where('id', $id)->get();

        return response()->json($pedido_produto, 200);
    }

    /**
     * destroy
     *
     * @return void
     */

    public function destroy(int $id)
    {
        $pedido_produto = PedidoProduto::find($id);

        if (!$pedido_produto)
            return response()->json(['message' => 'Pedido Produto inválido'], 422);

        $pedido_produto::delete();
        return response()->json(['message' => 'Pedido Produto deletado com sucesso'], 204);
    }

    /**
     * updateVariacaoSelecionada
     *
     * @return VariacaoSelecionada
     */

    public function updateVariacaoSelecionada(Request $request)
    {
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

    public function destroyVariacaoSelecionada(int $id)
    {
        $variacao_selecionada = VariacaoSelecionada::find($id);

        if (!$variacao_selecionada)
            return response()->json(['message' => 'Variação Selecionada inválida'], 422);

        $variacao_selecionada::delete();
        return response()->json(['message' => 'Variacao Selecionada deletada com sucesso'], 204);
    }
}
