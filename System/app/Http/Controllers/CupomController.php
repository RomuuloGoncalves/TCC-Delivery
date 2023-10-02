<?php

namespace App\Http\Controllers;

use App\Models\Cupom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CupomController extends Controller {

    public function __construct() {}

    public function store(Request $request) {
        $regras = [
            'nome' => ['required', 'string', 'max:255', 'unique:Cupons'],
            'porcentagem_desconto' => ['nullable', 'numeric', 'min:0.1', 'max:100'],
            'valor_desconto' => ['nullable', 'numeric', 'min:1', 'max:999999999'],
            'data_validade' => ['nullable', 'after:now'],
            'quantidade' => ['nullable', 'integer', 'max:30'],
            'status' => ['required', 'boolean']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cupom = Cupom::create([
            'nome' => $request->input('nome'),
            'porcentagem_desconto' => $request->input('email'),
            'valor_desconto' => $request->input('valor_desconto'),
            'data_validade' => $request->input('data_validade'),
            'quantidade' => $request->input('quantidade') != 0 ? $request->input('quantidade') : null,
            'status' => $request->input('status')
        ]);

        return response()->json($cupom, 201);
    }

    public function usar(Request $request) {
        $id = $request->input('id');

        $cupom = Cupom::find($id);

        if($cupom == null or $cupom->status == 0) 
            return response()->json(['mensage' => 'Cupom Inválido'], 404);
            
        if($cupom->quantidade !== null) {
            $cupom->quantidade == 0 ? 
                $cupom->status = 0:
                $cupom->quantidade = $cupom->quantidade - 1;   
            $cupom->save();
        }
        return response()->json($cupom, 201);
    }

    public function update(Request $request) {    
        $regras = [
            'id' => ['required', 'integer', 'max:30'],
            'nome' => ['nullable', 'string', 'max:255', 'unique:Cupons'],
            'porcentagem_desconto' => ['nullable', 'numeric', 'min:0.1', 'max:100'],
            'valor_desconto' => ['nullable', 'numeric', 'min:1', 'max:999999999'],
            'data_validade' => ['nullable', 'after:now'],
            'quantidade' => ['nullable', 'integer', 'max:30'],
            'status' => ['nullable', 'boolean']
        ];
        
        $validacao = Validator::make($request->all(), $regras);
        
        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cupom = Cupom::find($request->input('id'));

        $atributos = ['nome', 'porcentagem_desconto', 'valor_desconto', 'data_validade', 'quantidade', 'status'];

        foreach($atributos as $atributo) {
            $request->input($atributo) !== null?
                $cupom->$atributo = $request->input($atributo):
                null;
            
        }
        $cupom->save();

        return response()->json($cupom, 202);
    }

    public function list() {
        $cupom = Cupom::all();

        return response()->json($cupom, 201);
    }

    public function delete(Request $request) {
        $id = $request->input('id');
        $cupom = Cupom::find($id);
        
        if(!$cupom)
            return response()->json(['message' => 'Cupom inválido'], 422);
        else
            $cupom::find($id)->delete();
            return response()->json(['message' => 'Cupom deletado com sucesso'], 202);
    }
}
