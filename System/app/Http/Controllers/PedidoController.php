<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PedidoController extends Controller {
    public function __construct() {}

    public function pedCliente(Request $request) {
        $cod_cliente = $request->input('cod_cliente'); 
        $pedido = Pedido::all()->where('cod_cliente', $cod_cliente);
    
        return response()->json($pedido, 202);
    }

    public function pedID(int $id)
    {
        $pedido = Pedido::find($id);
            
        return response()->json($pedido, 201);
    }

    public function list() {
        $pedido = Pedido::all();
    
        return response()->json($pedido, 201);
    }
}