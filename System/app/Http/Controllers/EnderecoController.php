<?php

namespace App\Http\Controllers;

use App\Models\Endereco;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EnderecoController extends Controller {
    public function __construct() {}

    public function store(Request $request) {
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'complemento' => ['nullable', 'string', 'max:255'],
            'bairro' => ['required', 'string', 'max:255'],
            'numero' => ['required', 'string', 'max:255'],
            'rua' => ['required', 'string', 'max:255'],
            'cep' => ['nullable', 'string', 'size:8'],
            'cod_cliente' => ['required', 'integer', 'max:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $endereco = Endereco::create([
            'nome' => $request->input('nome'),
            'complemento' => $request->input('complemento'),
            'bairro' => $request->input('bairro'),
            'numero' => $request->input('numero'),
            'rua' => $request->input('rua'),
            'cep' => $request->input('cep'),
            'cod_cliente' => $request->input('cod_cliente')
        ]);

        return response()->json($endereco, 201);
    }

    public function update(Request $request) {    
        $regras = [
            'id' => ['required', 'integer', 'max:30'],
            'nome' => ['nullable', 'string', 'max:255'],
            'complemento' => ['nullable', 'string', 'max:255'],
            'bairro' => ['nullable', 'string', 'max:255'],
            'numero' => ['nullable', 'string', 'max:255'],
            'rua' => ['nullable', 'string', 'max:255'],
            'cep' => ['nullable', 'string', 'size:8']
        ];
        
        $validacao = Validator::make($request->all(), $regras);
        
        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $id = $request->input('id');
        $endereco = Endereco::where('id' ,$id)->first();
        $atributos = ['nome', 'complemento', 'bairro', 'numero', 'rua', 'cep'];

        foreach($atributos as $atributo) {
            if($request->input($atributo) !== null) {
                $endereco->$atributo = $request->input($atributo);
            }
        }
        $endereco->save();

        return response()->json($endereco, 202);
    }

    public function list(Request $request) {
        $cod_cliente = $request->input('cod_cliente'); 
        $endereco = Endereco::all()->where('cod_cliente', $cod_cliente);

        return response()->json($endereco, 202);
    }

    public function delete(Request $request) {
        $id = $request->input('id');
        $endereco = Endereco::find($id);
        
        if(!$endereco)
            return response()->json(['message' => 'Endereço inválido'], 422);
        else
            Endereco::find($id)->delete();
            return response()->json(['message' => 'Endereço deletado com sucesso'], 202);
    }
}