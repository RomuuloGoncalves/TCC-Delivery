<?php

namespace App\Http\Controllers;

use App\Models\Funcionario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;

class FuncionarioController extends Controller
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

    /**
     * getAuthFuncionario
     *
     * @return Funcionario
     */
    public static function getAuthFuncionario()
    {
        if (!$funcionario = auth('funcionario')->user())
            return response()->json(['status'=> 'error', 'message'=> 'Sem autorização'], 401);
        return $funcionario;
    }

    /**
     * store
     *
     * @return Funcionario
     */

    public function store(Request $request)
    {
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'login' => ['required', 'string', 'string', 'max:255', 'unique:Funcionarios'],
            'password' => ['required', 'string', 'max:255', 'min:8'],
            'nivel_acesso' => ['required', Rule::in(['1', '2', '3'])],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $funcionario = Funcionario::create([
            'nome' => ucwords($request->input('nome')),
            'login' => $request->input('login'),
            'password' => password_hash($request->input('password'), PASSWORD_DEFAULT),
            'nivel_acesso' => $request->input('nivel_acesso'),
        ]);

        return response()->json($funcionario, 201);
    }

    /**
     * login
     *
     * @return void
     */

     public function login(Request $request)
     {
         $regras = [
             'login' => ['required', 'string', 'max:255', 'exists:Funcionarios'],
             'password' => ['required', 'string', 'max:255', 'min:8'],
         ];

         $validacao = Validator::make($request->all(), $regras);

         if ($validacao->fails())
             return response()->json($validacao->errors(), 422);

         $credenciais = $request->only('login', 'password');

         if (!$token = auth('funcionario')->attempt($credenciais))
             return response()->json(['login' => 'Credenciais inválidas'], 401);

         return $this->responderComToken($token);
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
     * @return Funcionario
     */
    public function index()
    {
        try {
            $funcionario = $this->getAuthFuncionario();
            return response()->json($funcionario);

        } catch (TokenExpiredException $e) {
            return response()->json([
                'error' => 'Token expirado!',
            ], 401);
        } catch (TokenInvalidException $e) {
            return response()->json([
                'error' => 'Token inválido!',
            ], 401);
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'Não foi possivel processar o token!',
            ], 500);
        }
    }
}
