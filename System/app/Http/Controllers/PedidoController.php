<?php

namespace App\Http\Controllers;

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
    
        return response()->json($pedido, 202);
    }

    /**
     * show
     *
     * @return Cliente
     */

    public function show(int $id)
    {
        $pedido = Pedido::with(['cliente', 'funcionario', 'endereco', 'cupom'])->find($id);    
        $pedido->pedido_produtos = PedidoProduto::with('produto')->where('cod_pedido', $id)->get();

        return response()->json($pedido, 201);
    }

    /**
     * index
     *
     * @return Pedido[]
     */

    public function index() {
        $pedido = Pedido::with(['cliente', 'funcionario', 'endereco', 'cupom', "Pedido_produtos"])->get();
        return response()->json($pedido, 201);
    }
}