<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClienteController extends Controller
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
            'email' => ['required', 'string', 'email', 'max:255', 'unique:Clientes'],
            'password' => ['required', 'string', 'max:255', 'min:8'],
            'telefone' => ['required', 'string', 'size:11', 'unique:Clientes'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json(['tipo' => 'erro', 'data' => $validacao->errors()], 422);

        $cliente = Cliente::create([
            'nome' => $request->input('nome'),
            'email' => $request->input('email'),
            'password' => password_hash($request->input('password'), PASSWORD_DEFAULT),
            'telefone' => $request->input('telefone'),
        ]);

        return response()->json($cliente);
    }
}
