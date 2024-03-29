<?php

namespace App\Http\Controllers;

use App\Models\Endereco;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\ClienteController;

class EnderecoController extends Controller {

    public function __construct() {}

    /**
     * store
     *
     * @return Endereco
     */

    public function store(Request $request) {
        $regras = [
            'nome' => ['required', 'min:2', 'max:80', 'unique:Enderecos'],
            'complemento' => ['nullable', 'string', 'max:255'],
            'bairro' => ['required', 'string', 'max:255'],
            'numero' => ['required', 'integer', 'min:1', 'max_digits:5'],
            'rua' => ['required', 'string', 'max:255'],
            'cep' => ['nullable', 'string', 'size:9'],
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
            'cod_cliente' => ClienteController::getAuthCliente()->id
        ]);

        return response()->json($endereco, 201);
    }

    /**
     * update
     *
     * @return Endereco
     */

    public function update(Request $request) {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'nome' => ['nullable', 'string', 'min:2', 'max:80', 'unique:Enderecos'],
            'complemento' => ['nullable', 'string', 'max:255'],
            'bairro' => ['nullable', 'string', 'max:255'],
            'numero' => ['nullable', 'integer', 'min:1', 'max_digits:5'],
            'rua' => ['nullable', 'string', 'max:255'],
            'cep' => ['nullable', 'string', 'size:9']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $endereco = Endereco::
            where('id', $request->input('id'))
            ->where('cod_cliente',  ClienteController::getAuthCliente()->id)
            ->first();

        $atributos = ['nome', 'complemento', 'bairro', 'numero', 'rua', 'cep'];

        foreach($atributos as $atributo) {
            if($request->input($atributo) !== null) {
                $endereco->$atributo = $request->input($atributo);
            }
        }
        $endereco->save();

        return response()->json($endereco, 200);
    }

    /**
     * index
     *
     * @return Endereco[]
     */

    public function index() {
        $endereco = Cliente::with('enderecos')->where('id', ClienteController::getAuthCliente()->id)->first()->enderecos;

        return response()->json($endereco, 200);
    }

    /**
     * destroy
     *
     * @return void
     */

    public function destroy(int $id) {
        if (!$endereco = Endereco::find($id))
            return response()->json(['message' => 'Endereço inválido'], 422);

        $endereco->delete();
        return response()->json(['message' => 'Endereço deletado com sucesso'], 200);
    }
}
