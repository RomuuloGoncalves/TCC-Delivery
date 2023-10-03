<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProdutoController extends Controller {

    public function __construct() {}

    public function index() {
        $produto = Produto::all();

        return response()->json($produto, 200);
    }

    public function store(Request $request) {
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'descricao' => ['required', 'string', 'min:1', 'max:500'],
            'categoria' => ['required', 'string', 'min:1', 'max:255']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cupom = Produto::create([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
            'categoria' => $request->input('categoria'),
        ]);

        return response()->json($cupom, 201);
    }

    public function update(Request $request) {    
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'nome' => ['nullable', 'string', 'max:255'],
            'descricao' => ['nullable', 'string', 'min:1', 'max:500'],
            'categoria' => ['required', 'string', 'min:1', 'max:255']
        ];
        
        $validacao = Validator::make($request->all(), $regras);
        
        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $produto = Produto::find($request->input('id'));

        $atributos = ['nome', 'descricao', 'categoria'];

        foreach($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $produto->$atributo = $request->input($atributo)
                : null;
        }
        $produto->save();

        return response()->json($produto, 200);
    }

    public function list(int $id) {
        $produto = Produto::find($id);
        
        if(!$produto) 
            return response()->json(['mensage' => 'Produto não encontrado'], 404);
        
        return response()->json($produto, 200);
    }

    public function destroy(Request $request) {
        $id = $request->input('id');
        $produto = Produto::find($id);
        
        if(!$produto)
            return response()->json(['message' => 'Produto inválido'], 422);
        
        $produto::find($id)->delete();
        return response()->json(['message' => 'Produto deletado com sucesso'], 204);
    }
}
