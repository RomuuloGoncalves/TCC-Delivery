<?php

namespace App\Http\Controllers;

use App\Models\GrupoVariacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class GrupoVariacaoController extends Controller
{
    public function __construct() {}

    public function store(Request $request) {
        $regras = [
            'tipo' => ['required', 'string', 'max:255'],
            'quantidade_variacoes' => ['required', 'integer', 'max_digits:30'],
            'cod_produto' => ['required', 'integer', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $grupo_variacao = GrupoVariacao::create([
            'tipo' => $request->input('tipo'),
            'quantidade_variacoes' => $request->input('quantidade_variacoes'),
            'valor_desconto' => $request->input('valor_desconto'),
        ]);

        return response()->json($grupo_variacao, 201);
    }

    public function update(Request $request) {    
        $regras = [
            'tipo' => ['required', 'string', 'max:255'],
            'quantidade_variacoes' => ['required', 'integer', 'max_digits:30'],
        ];
        
        $validacao = Validator::make($request->all(), $regras);
        
        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $grupo_variacao = GrupoVariacao::find($request->input('id'));
        if (!$grupo_variacao)
            return response()->json(['error' => '"Grupo_variacao" not found'], 404);

        $atributos = ['tipo', 'quantidade_variacoes'];

        foreach($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $grupo_variacao->$atributo = $request->input($atributo)
                : null;
        }
        $grupo_variacao->save();

        return response()->json($grupo_variacao, 200);
    }

    public function index() {
        $grupo_variacao = GrupoVariacao::with(['produto', 'variacao'])->get();
        
        return response()->json($grupo_variacao, 200);
    }

    public function show(int $cod_produto) {
        $grupo_variacao = GrupoVariacao::with('variacao')
            ->where('cod_produto', $cod_produto)
            ->get();
        
        return response()->json($grupo_variacao, 200);
    }
    
    public function destroy(int $id) {
        $grupo_variacao = GrupoVariacao::find($id);
        
        if(!$grupo_variacao)
            return response()->json(['message' => 'Grupo variacao inválida'], 422);
        
        $grupo_variacao::find($id)->delete();
        return response()->json(['message' => 'Grupo variacao deletada com sucesso'], 204);
    }
}
