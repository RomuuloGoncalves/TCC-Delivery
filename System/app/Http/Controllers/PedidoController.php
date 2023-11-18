<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Pedido;
use App\Models\PedidoProduto;
use App\Models\Endereco;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Carbon\Carbon;

class PedidoController extends Controller
{

    public function __construct()
    {
    }

    /**
     * store
     *
     * @return Pedido
     */

    static function store()
    {
        if (!$cliente = ClienteController::getAuthCliente()) {
            return response()->json(['Cliente Inválido'], 404);
        }

        $pedido = Pedido::create([
            'cod_cliente' => $cliente->id,
        ]);

        return $pedido;
    }

    /**
     * update
     *
     * @return Pedido
     */

    public function update(Request $request)
    {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'valor' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'data_pedido' => ['nullable', 'date'],
            'data_entrega' => ['nullable', 'date'],
            'data_pagamento' => ['nullable', 'date'],
            'endereco_pedido' => ['nullable', 'json'],
            'status' => ['nullable',  Rule::in(['Pronto', 'Em Entrega', 'Cancelado', 'Em Espera'])],
            'forma_pagamento' => ['nullable', 'in:Crédito, Dinheiro, Pix, Débito'],
            'cod_funcionario' => ['nullable', 'integer', 'max_digits:30'],
            'cod_endereco' => ['nullable', 'integer', 'max_digits:30'],
            'cod_cupom' => ['nullable', 'integer', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $pedido = Pedido::find($request->input('id'));
        if (!$pedido)
            return response()->json(['error' => '"Pedido" not found'], 404);

        $atributos = ['valor_total', 'valor_com_desconto', 'data_pedido', 'data_entrega', 'data_pagamento', 'endereco_pedido', 'status', 'forma_pagamento', 'cod_funcionario', 'cod_endereco', 'cod_cupom'];

        foreach ($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $pedido->$atributo = $request->input($atributo)
                : null;
        }
        $pedido->save();

        return response()->json($pedido, 200);
    }

    /**
     * showCarrinho
     *
     * @return Pedido
     */

    public function showCarrinho()
    {
        $cliente =  ClienteController::getAuthCliente();
        if (!$pedido = Pedido::with('cupom')->where('cod_cliente', $cliente->id)->where('status', 'Carrinho')->get(['id', 'cod_cupom'])->first())
            $pedido = PedidoController::store();
        $pedido->pedido_produtos = PedidoProduto::with('produto')->where('cod_pedido', $pedido->id)->get();
        return response()->json($pedido, 200);
    }

    public function finalizarPedido(Request $request)
    {
        $regras = [
            'forma_pagamento' => ['required', Rule::in(['Crédito', 'Dinheiro', 'Pix', 'Débito'])],
            'cod_endereco' => ['required', 'integer', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cliente =  ClienteController::getAuthCliente();
        if (!$pedido = Pedido::where('cod_cliente', $cliente->id)->where('status', 'Carrinho')->first())
            PedidoController::store();

        if (!$endereco = Endereco::where('id', $request->input('cod_endereco'))->where('cod_cliente', $cliente->id)->first())
            return response()->json(['cod_endereco' => 'Endereco inválido'], 422);

        $valor = 25.00;
        foreach ($pedido->pedido_produtos as $pedido_produto) {
            $valor += $pedido_produto->total * $pedido_produto->quantidade;
        }

        $pedido->valor_total = $valor;
        $pedido->data_pedido = Carbon::now();
        $pedido->forma_pagamento = $request->input('forma_pagamento');
        $pedido->endereco_pedido = "$endereco->rua, N° $endereco->numero";
        if ($endereco->complemento)
            $pedido->endereco_pedido += ", $endereco->complemento";
        $pedido->cod_endereco = $endereco->id;
        $pedido->status = 'Em Espera';
        $pedido->save();

        PedidoController::store();
        return response()->json($pedido, 200);
    }

    /**
     * showPedidosCliente
     *
     * @return Pedido
     */

    public function showPedidosCliente()
    {

        if (!$cliente = ClienteController::getAuthCliente())
            return response()->json(['error' => '"Cliente" not found'], 404);

        $pedidos = Pedido::with(['pedido_produtos.variacoes_selecionadas', 'endereco'])->where('cod_cliente', $cliente->id)->where('status', ['Em Espera', 'Em Entrega', 'Cancelado', 'Pronto'])->get();

        return response()->json($pedidos, 200);
    }

    /**
     * show
     *
     * @return Pedido
     */

    public function show(int $id)
    {
        $pedido = Pedido::with(['cliente', 'funcionario', 'endereco', 'cupom'])->find($id);
        $pedido->pedido_produtos = PedidoProduto::with('produto')
            ->where('cod_pedido', $id)
            ->get();

        foreach ($pedido->pedido_produtos as $pedido_produto) {
            $pedido_produto->produto->categoria = Categoria::where("id", $pedido_produto->produto->cod_categoria)->first();
        }

        return response()->json($pedido, 200);
    }

    /**
     * index
     *
     * @return Pedido[]
     */

    public function index()
    {
        $pedido = Pedido::with(['cliente', 'funcionario', 'endereco', 'cupom', 'pedido_produtos'])->whereIn('status', ['Em Espera', 'Em Entrega'])->get();
        return response()->json($pedido, 200);
    }

    /**
     * historico
     *
     * @return Pedido[]
     */

    public function historico()
    {
        $pedido = Pedido::with(['cliente', 'funcionario', 'endereco', 'cupom', 'pedido_produtos'])->whereIn('status', ['Cancelado', 'Pronto'])->get();
        return response()->json($pedido, 200);
    }
}
