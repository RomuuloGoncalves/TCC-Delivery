<?php

namespace App\Http\Controllers;

use App\Models\Cliente;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;


class ClienteController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }


    /**
     * Store
     *
     * @return Cliente
     */
    static function getAuthCliente()
    {
        $token = JWTAuth::getToken();
        return JWTAuth::parseToken()->authenticate();
    }

     /**
     * Store
     *
     * @return Cliente
     */
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
            return response()->json($validacao->errors(), 422);

        $cliente = Cliente::create([
            'nome' => $request->input('nome'),
            'email' => $request->input('email'),
            'password' => password_hash($request->input('password'), PASSWORD_DEFAULT),
            'telefone' => $request->input('telefone'),
        ]);

        return response()->json($cliente, 201);
    }

     /**
     * Login
     *
     * @return void
     */

    public function login(Request $request)
    {
        $regras = [
            'email' => ['required', 'string', 'email', 'max:255', 'exists:Clientes'],
            'password' => ['required', 'string', 'max:255', 'min:8'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $credenciais = $request->only('email', 'password');

        if (!$token = auth()->attempt($credenciais))
            return response()->json(['login' => 'Credenciais inválidas'], 401);

        return $this->responderComToken($token);
    }

     /**
     * show
     *
     * @return Cliente
     */

    public function show(int $id)
    {
        $cliente = Cliente::find($id);

        if(!$cliente)
            return response()->json(['message' => 'Cliente não encontrado'], 404);

        return response()->json($cliente, 201);
    }

     /**
     * responderComToken
     *
     * @return void
     */

    public function responderComToken(string $token)
    {
        return response()->json([
            'token' => $token,
            'tipo_token' => 'bearer',
        ]);
    }

     /**
     * index
     *
     * @return Cliente
     */
    public function index() {
        try {
            $cliente = $this->getAuthCliente();

            return response()->json($cliente);
        } catch (TokenExpiredException $e) {
            return response()->json([
                'message' => 'Token expirado!',
            ], 401);
        } catch (TokenInvalidException $e) {
            return response()->json([
                'message' => 'Token inválido!',
            ], 401);
        } catch (JWTException $e) {
            return response()->json([
                'message' => 'Não foi possivel processar o token!',
            ], 500);
        }
    }
}
