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

    public function __construct()
    {
    }

    /**
     * getAuthCliente
     *
     * @return Cliente
     */

    public static function getAuthCliente()
    {
        return auth('cliente')->user();
    }

    /**
     * store
     *
     * @return void
     */

    public function store(Request $request)
    {
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:Clientes'],
            'password' => ['required', 'string', 'max:255', 'min:8'],
            'telefone' => ['required', 'string', 'size:17', 'unique:Clientes'],

        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cliente = Cliente::create([
            'nome' => ucwords($request->input('nome')),
            'email' => $request->input('email'),
            'password' => password_hash($request->input('password'), PASSWORD_DEFAULT),
            'telefone' => $request->input('telefone'),
        ]);

        return response()->json($cliente, 201);
    }

    /**
     * update
     *
     * @return Cliente
     */

    public function update(Request $request) {
        $regras = [
            'nome' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'string', 'email', 'max:255', 'unique:Clientes'],
            'password' => ['nullable', 'string', 'max:255', 'min:8'],
            'telefone' => ['nullable', 'string', 'size:17', 'unique:Clientes'],
            'descricao' => ['required', 'string', 'max:500'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $cliente = Cliente::find($request->input('id'));
        if (!$cliente)
            return response()->json(['error' => '"cliente" not found'], 404);

        $atributos = ['nome', 'email', 'password', 'telefone', 'descricao'];

        foreach($atributos as $atributo) {
            if ($atributo === "password") {
                $cliente->$atributo = password_hash($request->input($atributo), PASSWORD_DEFAULT);
            } else {
                $request->input($atributo) != ""
                    ? $cliente->$atributo = $request->input($atributo)
                    : null;
            }
        }

        $cliente->save();

        return response()->json($cliente, 200);
    }

    /**
     * alterarSenha
     *
     * @return void
     */

    public function alterarSenha(Request $request) {
        $regras = [
            'password' => ['nullable', 'string', 'max:255', 'min:8'],
            'newPassword' => ['nullable', 'string', 'max:255', 'min:8', 'different:password'],
            'confirmNewPassword' => ['nullable', 'string', 'max:255', 'min:8', 'same:newPassword'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        if (!$cliente = $this->getAuthCliente())
            return response()->json(['error' => '"cliente" not found'], 404);

        $credenciais = [
            'email' => $cliente->email,
            'password' => $request->input('password')
        ];

        if(!auth('cliente')->attempt($credenciais))
            return response()->json(['error' => 'Senha inválida'], 422);

        if(!$newPassword = $request->input('newPassword') === $request->input('confirmNewPassword'))
            return response()->json(['error' => 'Coloque a mesma senha'], 422);

        $cliente->password = password_hash($newPassword, PASSWORD_DEFAULT);
        $cliente->save();
        print_r(password_hash($newPassword, PASSWORD_DEFAULT));
        print_r($cliente->password);
        exit();

        return response()->json(["Foi"], 200);
    }

    /**
     * login
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


        if (!$token = auth('cliente')->attempt($credenciais))
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
     * show
     *
     * @return Cliente
     */

    public function show(int $id)
    {
        $cliente = Cliente::find($id);

        if (!$cliente)
            return response()->json(['message' => 'Cliente não encontrado'], 404);

        return response()->json($cliente, 201);
    }


    /**
     * index
     *
     * @return Cliente
     */

    public function index()
    {
        $cliente = $this->getAuthCliente();
        return response()->json($cliente);
    }

    /**
     * logout
     *
     * @return void
     */
    public function logout()
    {
        auth('cliente')->logout();
        return response()->json(['message'=> 'Logout realizado com sucesso!'], 200);
    }
}
