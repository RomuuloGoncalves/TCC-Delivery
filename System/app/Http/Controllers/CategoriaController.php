<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\GrupoVariacao;
use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriaController extends Controller {

    public function __construct() {}

    public function store(Request $request) {
        $regras = [
            'nome' => ['required', 'string', 'max:255', 'unique:Categorias'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $categoria = Categoria::create([
            'nome' => $request->input('nome'),
        ]);

        return response()->json($categoria, 201);
    }

    public function index() {
        $categorias =
            Categoria::with('produtos')->get();

        return response()->json($categorias, 200);
    }

    public function destroy(int $id) {
        $categoria = Categoria::find($id);

        if(!$categoria)
            return response()->json(['message' => 'Categoria inválida'], 422);

        $categoria::find($id)->delete();
        return response()->json(['message' => 'Categoria deletada com sucesso'], 204);
    }

    public function pegarCategoriaNome(string $nome) {
        $categoria = Categoria::where('nome', $nome)->with('produtos')->get();
        return response()->json($categoria);
    }
}
