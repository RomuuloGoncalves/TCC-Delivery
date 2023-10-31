<?php

namespace App\Http\Controllers;

use App\Models\Cupom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CupomController extends Controller {

    public function __construct() {}

    /**
     * index
     *
     * @return Cupom
     */

    public function index() {
        $cupom = Cupom::all();

        return response()->json($cupom, 200);
    }

    /**
     * store
     *
     * @return void
     */

    public function store(Request $request) {
        $regras = [
            'nome' => ['required', 'string', 'max:255', 'unique:Cupons'],
            'porcentagem_desconto' => ['nullable', 'decimal:2', 'min:0.1', 'max:100'],
            'valor_desconto' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'data_validade' => ['nullable', 'after:now'],
            'quantidade' => ['nullable', 'integer', 'max_digits:30'],
            'status' => ['required', 'boolean']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cupom = Cupom::create([
            'nome' => $request->input('nome'),
            'porcentagem_desconto' => $request->input('porcentagem_desconto'),
            'valor_desconto' => $request->input('valor_desconto'),
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

    public function usar(Request $request) {
        $cupom = Cupom::find($request->input('id'));

        if($cupom == null or $cupom->status == 0)
            return response()->json(['mensage' => 'Cupom Inválido'], 404);

        if($cupom->quantidade !== null) {
            $cupom->quantidade === 0
                ? $cupom->status = 0
                : $cupom->quantidade = $cupom->quantidade - 1;
            $cupom->save();
        }
        return response()->json($cupom, 201);
    }

    /**
     * update
     *
     * @return Cupom
     */

    public function update(Request $request) {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'nome' => ['required', 'string', 'max:255', 'unique:Cupons'],
            'porcentagem_desconto' => ['nullable', 'decimal:2', 'min:0.1', 'max:100'],
            'valor_desconto' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'data_validade' => ['nullable', 'after:now'],
            'quantidade' => ['nullable', 'integer', 'max_digits:30'],
            'status' => ['required', 'boolean']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cupom = Cupom::find($request->input('id'));
        if (!$cupom)
            return response()->json(['error' => '"cupom" not found'], 404);

        $atributos = ['nome', 'porcentagem_desconto', 'valor_desconto', 'data_validade', 'quantidade', 'status'];

        foreach($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $cupom->$atributo = $request->input($atributo)
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

    public function show(int $id) {
        $cupom = Cupom::find($id);

        if(!$cupom)
            return response()->json(['mensage' => 'Cupom não encontrado'], 404);

        return response()->json($cupom, 200);
    }

    /**
     * destroy
     *
     * @return void
     */

    public function destroy(int $id) {
        if(!$cupom = Cupom::find($id))
            return response()->json(['message' => 'Cupom inválido'], 422);

        $cupom->delete();
        return response()->json(['message' => 'Cupom deletado com sucesso'], 204);
    }
}
