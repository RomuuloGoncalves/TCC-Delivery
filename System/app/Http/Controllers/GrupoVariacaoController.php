<?php

namespace App\Http\Controllers;

use App\Models\GrupoVariacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class GrupoVariacaoController extends Controller
{
    public function __construct()
    {
    }

    public function store(Request $request)
    {
        $regras = [
            'tipo' => ['required', 'string', 'max:255'],
            'quantidade_variacoes_min' => ['required', 'integer', 'min:1'],
            'quantidade_variacoes_max' => ['required', 'integer', 'min:1'],
            'cod_produto' => ['required', 'integer']
        ];

        $validacao = Validator::make($request->all(), $regras);
        $quantidade_max = $request->input('quantidade_variacoes_max');
        $quantidade_min = $request->input('quantidade_variacoes_min');

        if ($quantidade_max < $quantidade_min)
            return response()->json([
                'quantidade_variacoes_min' => ['Deve ser menor que quantidade máxima']
            ], 422);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $grupo_variacao = GrupoVariacao::create([
            'tipo' => $request->input('tipo'),
            'quantidade_variacoes_min' => $quantidade_min,
            'quantidade_variacoes_max' => $quantidade_max,
            'cod_produto' => $request->input('cod_produto')

        ]);

        return response()->json($grupo_variacao, 201);
    }

    public function update(Request $request)
    {
        $regras = [
            'tipo' => ['required', 'string', 'max:255'],
            'quantidade_variacoes_min' => ['nullable', 'integer'],
            'quantidade_variacoes_max' => ['nullable', 'integer'],
            'cod_produto' => ['required', 'integer']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        if ($request->input('quantidade_variacoes_max') < $request->input('quantidade_variacoes_min'))
            return response()->json([
                'quantidade_variacoes_min' => ['Deve ser menor que quantidade máxima']
            ], 422);

        $grupo_variacao = GrupoVariacao::find($request->input('id'));
        if (!$grupo_variacao)
            return response()->json(['error' => '"Grupo_variacao" not found'], 404);

        $atributos = ['tipo', 'quantidade_variacoes_min', 'quantidade_variacoes_max'];

        foreach ($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $grupo_variacao->$atributo = $request->input($atributo)
                : null;
        }
        $grupo_variacao->save();

        return response()->json($grupo_variacao, 200);
    }

    public function index()
    {
        $grupo_variacao = GrupoVariacao::with(['produto', 'variacao'])->get();

        return response()->json($grupo_variacao, 200);
    }

    public function show(int $cod_produto)
    {
        $grupo_variacao = GrupoVariacao::with('variacao')
            ->where('cod_produto', $cod_produto)
            ->get();

        return response()->json($grupo_variacao, 200);
    }

    public function destroy(int $id)
    {
        $grupo_variacao = GrupoVariacao::find($id);

        if (!$grupo_variacao)
            return response()->json(['message' => 'Grupo variacao inválida'], 422);

        $grupo_variacao::find($id)->delete();
        return response()->json(['message' => 'Grupo variacao deletada com sucesso'], 204);
    }
}
