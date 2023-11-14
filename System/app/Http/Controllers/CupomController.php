<?php

namespace App\Http\Controllers;

use App\Models\Cupom;
use App\Models\Pedido;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CupomController extends Controller
{

    public function __construct()
    {
    }

    /**
     * index
     *
     * @return Cupom
     */

    public function index()
    {
        $cupom = Cupom::all();

        return response()->json($cupom, 200);
    }

    /**
     * store
     *
     * @return void
     */

    public function store(Request $request)
    {
        $regras = [
            'nome' => ['required', 'string', 'max:255', 'unique:Cupons'],
            'porcentagem_desconto' => ['nullable', 'min:1', 'max:100'],
            'data_validade' => ['nullable', 'after:now'],
            'quantidade' => ['nullable', 'integer', 'max_digits:30'],
            'status' => ['required', 'boolean']
        ];

        $request->merge(['nome' => strtoupper($request->input('nome'))]);

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cupom = Cupom::create([
            'nome' => strtoupper($request->input('nome')),
            'porcentagem_desconto' => $request->input('porcentagem_desconto'),
            'data_validade' => $request->input('data_validade'),
            'quantidade' => $request->input('quantidade') != 0 ? $request->input('quantidade') : null,
            'status' => $request->input('status')
        ]);

        return response()->json($cupom, 201);
    }

    /**
     * usar
     *
     * @return Cupom
     */

    public function usar(Request $request)
    {
        $cliente = ClienteController::getAuthCliente();

        if (!$cupom = Cupom::where('nome', strtoupper($request->input('nome')))->first())
            return response()->json(['message' => 'Cupom não encontrado!'], 404);

        if (!$cupom->status || !$cupom->quantidade)
            return response()->json(['message' => 'Cupom inválido'], 403);

        if (Pedido::where('cod_cliente', $cliente->id)->where('cod_cupom', $cupom->id)->get())
            return response()->json(['message' => 'Este Cupom já foi utilizado'], 403);

        if (!$pedidoCarrinho = Pedido::where('cod_cliente', $cliente->id)->where('status', 'Carrinho'))
            return response()->json(['message' => 'Cliente não tem carrinho'], 422);

        if ($pedidoCarrinho->cupom !== null)
            return response()->json(['message' => 'Você já utilizou um cupom!']);


        $cupom->quantidade -= 1;
        $cupom->save();

        $pedidoCarrinho->cupom = $cupom;
        $pedidoCarrinho->save();

        return response()->json($pedidoCarrinho, 200);
    }

    /**
     * update
     *
     * @return Cupom
     */

    public function update(Request $request)
    {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'nome' => ['required', 'string', 'max:255', 'unique:Cupons'],
            'porcentagem_desconto' => ['nullable', 'min:1', 'max:100'],
            'data_validade' => ['nullable', 'after:now'],
            'quantidade' => ['nullable', 'integer', 'max_digits:30'],
            'status' => ['required', 'boolean']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        if (!$cupom = Cupom::find($request->input('id')))
            return response()->json(['error' => 'Cupom não encontrado'], 404);

        $atributos = ['nome', 'porcentagem_desconto', 'valor_desconto', 'data_validade', 'quantidade', 'status'];

        foreach ($atributos as $atributo) {
            ($request->input($atributo) !== null)
                ? $cupom->$atributo = ($atributo === 'nome') ? strtoupper($request->input($atributo)) : $request->input($atributo)
                : null;
        }
        $cupom->save();

        return response()->json($cupom, 200);
    }

    /**
     * show
     *
     * @return Cupom
     */

    public function show(int $id)
    {
        $cupom = Cupom::find($id);

        if (!$cupom)
            return response()->json(['mensage' => 'Cupom não encontrado'], 404);

        return response()->json($cupom, 200);
    }

    /**
     * destroy
     *
     * @return void
     */

    public function destroy(int $id)
    {
        if (!$cupom = Cupom::find($id))
            return response()->json(['message' => 'Cupom inválido'], 422);

        $cupom->delete();
        return response()->json(['message' => 'Cupom deletado com sucesso'], 204);
    }
}
