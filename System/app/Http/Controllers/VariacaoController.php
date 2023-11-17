<?php

namespace App\Http\Controllers;

use App\Models\Variacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VariacaoController extends Controller
{
    public function __construct()
    {
    }

    /**
     * store
     *
     * @return Variacao
     */

    public function store(Request $request)
    {
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'valor' => ['required', 'numeric', 'min:0'],
            'descricao' => ['required', 'string', 'max:500'],
            'cod_grupo_variacoes' => ['required', 'integer', 'exists:Grupo_variacoes,id'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $variacao = Variacao::create([
            'nome' => $request->input('nome'),
            'valor' => $request->input('valor'),
            'descricao' => $request->input('descricao'),
            'cod_grupo_variacoes' => $request->input('cod_grupo_variacoes')
        ]);

        return response()->json($variacao, 201);
    }

    /**
     * update
     *
     * @return Variacao
     */

    public function update(Request $request)
    {
        $regras = [
            'nome' => ['nullable', 'string', 'max:255'],
            'valor' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'descricao' => ['nullable', 'string', 'max:500']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $variacao = Variacao::find($request->input('id'));
        if (!$variacao)
            return response()->json(['error' => '"Variacao" not found'], 404);

        $atributos = ['nome', 'valor', 'imagem', 'descricao'];

        foreach ($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $variacao->$atributo = $request->input($atributo)
                : null;
        }
        $variacao->save();

        return response()->json($variacao, 200);
    }

    /**
     * index
     *
     * @return Variacao[]
     */

    public function index()
    {
        $variacao = Variacao::with(['grupo_variacao' => function ($query) {
            $query->select('id', 'tipo');
        }])->get();

        return response()->json($variacao, 200);
    }

        /**
     * show
     *
     * @return Variacao
     */

     public function show(int $id)
     {
         $variacao = Variacao::with(['grupo_variacao'])->where('id', $id)->find($id);
 
         if (!$variacao)
             return response()->json(['mensage' => 'Variacao não encontrada'], 404);
 
         return response()->json($variacao, 200);
     }

    /**
     * destroy
     *
     * @return void
     */

    public function destroy(int $id)
    {
        $variacao = Variacao::find($id);

        if (!$variacao)
            return response()->json(['message' => 'Variacao inválida'], 422);

        $variacao::find($id)->delete();
        return response()->json(['message' => 'Variacao deletada com sucesso'], 204);
    }
}
