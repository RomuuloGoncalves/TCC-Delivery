<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthClienteController extends Controller
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


    public function login(Request $request)
    {
        $regras = [
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'max:255', 'min:8'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json(['tipo' => 'erro', 'data' => $validacao->errors()], 422);

        $credenciais = $request->only('email', 'password');

        if (!$token = auth()->attempt($credenciais))
            return response()->json(['tipo' => 'erro', 'mensagem' => 'Credenciais inválidas'], 401);

        return $this->responderComToken($token);
    }

    public function responderComToken(string $token) {
        return response()->json([
            'token' => $token,
            'tipo_token' => 'bearer',
        ]);
    }
}
