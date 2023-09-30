<?php

namespace App\Http\Controllers;

use App\Models\Cupom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CupomController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function store(Request $request)
    {
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'porcentagem_desconto' => ['nullable', 'decimal:2' , 'max:5'],
            'valor_desconto' => ['nullable', 'decimal', 'max:9', 'min:9'],
            'data_validade' => ['nullable', 'after:now'],
            'quantidade' => ['nullable', 'integer', 'max:30'],
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
        ]);
        return response()->json($cupom, 201);
    }

    public function usar($id) 
    {
        $cupom = Cupom::find($id);

        if(!$cupom) 
            return response()->json($cupom, 404);

            
        if($cupom->quantidade > 0)
            $cupom->quantidade = $cupom->quantidade - 1;
            
        return response()->json($cupom, 201);
    }
}
