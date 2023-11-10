<?php

namespace App\Http\Controllers;

use App\Models\GrupoVariacao;
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

    public function store(Request $request)
    {
        $regras = [
            'cod_produto' => ['required', 'integer', 'max_digits:30'],
            'quantidade' => ['nullable', 'integer', 'min: 1', 'max_digits:30'],
            'observacao' => ['nullable', 'string', 'max:255'],

            'cod_variacoes' => ['nullable', 'array'],
            'cod_variacoes.*' => ['nullable', 'integer', 'max_digits:30']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        if (!$cliente = ClienteController::getAuthCliente()) {
            return response()->json(["Cliente Inválido"], 422);
        }

        if (!$pedido = Pedido::where('cod_cliente', $cliente->id)->where('status', 'Carrinho')->first()) {
            $pedido = PedidoController::store();
        }

        $pedido_produto = PedidoProduto::create([
            'cod_pedido' => $pedido->id,
            'cod_produto' => $request->input('cod_produto'),
            'quantidade' => $request->input('quantidade'),
            'observacao' => $request->input('observacao')
        ]);

        $array_cod_var_sel = $request->input('cod_variacoes');
        $grupo_variacoes = GrupoVariacao::with(['variacao'])
            ->where('cod_produto', $pedido_produto->cod_produto)
            ->get();

        $array_cod_variacoes_validas = [];

        foreach ($grupo_variacoes as $item) {
            $a = [];
            foreach ($item->variacao as $variacao) {
                $array_cod_variacoes_validas[] = $variacao->id;
                $a[] = $variacao->id;
            }

            $interseccao = array_intersect($a, $array_cod_var_sel);

            if($interseccao == []) {
                return response()->json(["Alguma das Variações Selecionadas é inválida"], 422);
            }

            if($item->quantidade_variacoes_min < count($interseccao) || $item->quantidade_variacoes_max > count($interseccao))  {
                return response()->json(["Quantidade de variações no campo $item->nome é Inválido."], 422);
            }

        }

        var_dump(array_count_values($array_cod_var_sel));
        var_dump($array_cod_variacoes_validas);
        var_dump($array_cod_var_sel);

        if(array_diff($array_cod_var_sel, $array_cod_variacoes_validas)) {
            return response()->json(["Alguma das Variações Selecionadas é inválida"], 422);
        }

        foreach ($array_cod_var_sel as $cod_variacao) {
            $variacoes_selecionadas[] = VariacaoSelecionada::create([
                'cod_pedido_produto' => $pedido_produto->id,
                'cod_variacao' => $cod_variacao
            ]);
        }

        return response()->json([$pedido_produto, $variacoes_selecionadas], 201);
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
        $pedido_produto = PedidoProduto::with(['variacoes_selecionadas.variacao.grupo_variacao' =>
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
