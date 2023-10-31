<?php

namespace App\Http\Controllers;
use App\Models\PedidoProduto;
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
            'cod_pedido' => ['required', 'integer', 'max_digits:30'],
            'cod_produto' => ['required', 'integer', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $pedido_produto = PedidoProduto::create([
            'cod_pedido' => $request->input('cod_pedido'),
            'cod_produto' => $request->input('cod_produto')
        ]);

        return response()->json($pedido_produto, 201);
    }

    /**
     * destroy
     *
     * @return void
     */

     public function destroy(int $id) {
        $pedido_produto = PedidoProduto::find($id);

        if(!$pedido_produto)
            return response()->json(['message' => 'Pedido Produto inválida[p'], 422);

        $pedido_produto::find($id)->delete();
        return response()->json(['message' => 'Pedido Produto deletado com sucesso'], 204);
    }
}
