<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriaController extends Controller {

    public function __construct() {}

    /**
     * store
     *
     * @return Categoria
     */

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

    /**
     * index
     *
     * @return Categoria[]
     */

    public function index() {
        $categorias = Categoria::with(['produtos'])->get();

        return response()->json($categorias, 200);
    }

    /**
     * showHome
     *
     * @return Categoria[]
     */

    public function showHome() {
        $categorias = Categoria::with(['produtos'])
            ->where('id', '<>', 1)
            ->get();

        return response()->json($categorias, 200);
    }

    /**
     * destroy
     *
     * @return void
     */

    public function destroy(int $id) {
        $categoria = Categoria::find($id);

        if(!$categoria)
            return response()->json(['message' => 'Categoria inválida'], 422);

        $categoria::find($id)->delete();
        return response()->json(['message' => 'Categoria deletada com sucesso'], 204);
    }

    public function show(int $id) {
        $categoria = Categoria::where('id', $id)->with('produtos.grupo_variacao.variacao')->get();
        return response()->json($categoria);
    }
}
