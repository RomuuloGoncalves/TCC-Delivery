<?php

namespace App\Http\Controllers;

use App\Models\Variacao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VariacaoController extends Controller
{
    public function __construct() {}

    public function store(Request $request) {
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'porcentagem_desconto' => ['nullable', 'decimal:2', 'min:0.1', 'max:100'],
            'valor_desconto' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'valor_inicial' => ['required', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'imagem' => ['nullable', 'string', 'max:500'],
            'descricao' => ['required', 'string', 'max:500'],
            'cod_grupo_variacoes' => ['required', 'integer', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $variacao = Variacao::create([
            'nome' => $request->input('nome'),
            'porcentagem_desconto' => $request->input('porcentagem_desconto'),
            'valor_desconto' => $request->input('valor_desconto'),
            'valor_inicial' => $request->input('valor_inicial'),
            'imagem' => $request->input('imagem'),
            'descricao' => $request->input('descricao'),
            'cod_grupo_variacoes' => $request->input('cod_grupo_variacoes')
        ]);

        return response()->json($variacao, 201);
    }

    public function update(Request $request) {    
        $regras = [
            'nome' => ['nullable', 'string', 'max:255'],
            'porcentagem_desconto' => ['nullable', 'decimal:2', 'min:0.1', 'max:100'],
            'valor_desconto' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'valor_inicial' => ['nullable', 'decimal:2', 'min_digit:1', 'max_digits:999999999'],
            'imagem' => ['nullable', 'string', 'max:500'],
            'descricao' => ['nullable', 'string', 'max:500']
        ];
        
        $validacao = Validator::make($request->all(), $regras);
        
        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $variacao = Variacao::find($request->input('id'));
        if (!$variacao)
            return response()->json(['error' => '"Variacao" not found'], 404);

        $atributos = ['nome', 'porcentagem_desconto', 'valor_desconto', 'valor_inicial', 'imagem', 'descricao'];

        foreach($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $variacao->$atributo = $request->input($atributo)
                : null;
        }
        $variacao->save();

        return response()->json($variacao, 200);
    }

    public function index() {
        $variacao = Variacao::all();
        
        return response()->json($variacao, 200);
    }
    
    public function destroy(int $id) {
        $variacao = Variacao::find($id);
        
        if(!$variacao)
            return response()->json(['message' => 'Variacao inválida'], 422);
        
        $variacao::find($id)->delete();
        return response()->json(['message' => 'Variacao deletada com sucesso'], 204);
    }
}
