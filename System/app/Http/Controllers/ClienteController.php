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

    public function login(Request $request)
    {
        $regras = [
            'email' => ['required', 'string', 'email', 'max:255', 'exists:Clientes'],
            'password' => ['required', 'string', 'max:255', 'min:8'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json(['tipo' => 'erro', 'data' => $validacao->errors()], 422);

        $credenciais = $request->only('email', 'password');

        if (!$token = auth()->attempt($credenciais))
            return response()->json(['tipo' => 'erro', 'data' => ['server' => 'Credenciais inválidas']], 401);

        return $this->responderComToken($token);
    }

    public function responderComToken(string $token)
    {
        return response()->json([
            'token' => $token,
            'tipo_token' => 'bearer',
        ]);
    }
}
