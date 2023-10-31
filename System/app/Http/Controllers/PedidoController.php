<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Cliente;
use App\Models\Pedido;
use App\Models\PedidoProduto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PedidoController extends Controller {

    public function __construct() {}

    /**
     * store
     *
     * @return void
     */

    public function store(Request $request) {
        $regras = [
            'cod_cliente' => ['required', 'integer', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $pedido = Pedido::create([
            'cod_cliente' => $request->input('cod_cliente'),
        ]);

        return response()->json($pedido, 201);
    }

    /**
     * update
     *
     * @return Pedido
     */

     public function update(Request $request) {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'valor_total' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'valor_com_desconto' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'data_pedido' => ['nullable', 'date'],
            'data_entrega' => ['nullable', 'date'],
            'data_pagamento' => ['nullable', 'date'],
            'endereco_pedido' => ['nullable', 'json'],
            'status' => ['nullable', new Enum(['Pronto', 'Em Entrega', 'Cancelado', 'Em Espera', 'Carrinho'])],
            'forma_pagamento' => ['nullable', new Enum('Crédito', 'Dinheiro', 'Pix', 'Débito')],
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

        foreach($atributos as $atributo) {
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

    public function showCarrinho(int $id) {
        $pedido = Pedido::with(['pedido_produtos.pedido_produto_grupo_variacoes'])->where('cod_cliente', $id)->where('status', 'Carrinho')->get();

        return response()->json($pedido, 200);
    }

    /**
     * showPedidosCliente
     *
     * @return Pedido
     */

     public function showPedidosCliente(int $id) {
        $pedido = Pedido::with(['pedido_produtos.pedido_produto_grupo_variacoes', 'endereco'])->where('cod_cliente', $id)->where('status', ['Em Espera', 'Em Entrega', 'Cancelado', 'Pronto'])->get();

        return response()->json($pedido, 200);
    }

    /**
     * show
     *
     * @return Pedido
     */

    public function show(int $id) {
        $pedido = Pedido::with(['cliente', 'funcionario', 'endereco', 'cupom'])->find($id);
        $pedido->pedido_produtos = PedidoProduto::with('produto')
            ->where('cod_pedido', $id)
            ->get();

        foreach($pedido->pedido_produtos as $pedido_produto) {
            $pedido_produto->produto->categoria = Categoria::where("id", $pedido_produto->produto->cod_categoria)->first();
        }

        return response()->json($pedido, 200);
    }

    /**
     * index
     *
     * @return Pedido[]
     */

    public function index() {
        $pedido = Pedido::with(['cliente', 'funcionario', 'endereco', 'cupom', 'Pedido_produtos'])->whereIn('status', ['Em Espera', 'Em Entrega'])->get();
        return response()->json($pedido, 200);
    }

    /**
     * historico
     *
     * @return Pedido[]
     */

    public function historico() {
        $pedido = Pedido::with(['cliente', 'funcionario', 'endereco', 'cupom', 'Pedido_produtos'])->whereIn('status', ['Cancelado', 'Pronto'])->get();
        return response()->json($pedido, 200);
    }
}
