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
            'nome' => ['required', 'string', 'max:255'],
            'complemento' => ['nullable', 'string', 'max:255'],
            'bairro' => ['required', 'string', 'max:255'],
            'numero' => ['required', 'string', 'max:255'],
            'rua' => ['required', 'string', 'max:255'],
            'cep' => ['nullable', 'string', 'size:8'],
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
        $endereco = Endereco::
            where('id', $id)
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
     * @return Endereco
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
        $endereco = Endereco::find($id);

        if(!$endereco)
            return response()->json(['message' => 'Endereço inválido'], 422);
        else
            Endereco::find($id)->delete();
            return response()->json(['message' => 'Endereço deletado com sucesso'], 204);
    }
}
