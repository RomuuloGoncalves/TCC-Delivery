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
     * showIdCliente
     *
     * @return Pedido
     */

    public function showIdCliente(Request $request) {
        $cod_cliente = $request->input('cod_cliente');
        $pedido = Pedido::all()->where('cod_cliente', $cod_cliente);

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
