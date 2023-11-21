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
            'nome' => ['required', 'string', 'min:2', 'max:80'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:Clientes'],
            'password' => ['required', 'string', 'min:8', 'max:255'],
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
            'nome' => ['nullable', 'string', 'min:2', 'max:80'],
            'email' => ['nullable', 'string', 'email', 'max:255', 'unique:Clientes'],
            'password' => ['nullable', 'string', 'min:8', 'max:255'],
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
            'password' => ['nullable', 'string', 'min:8', 'max:255'],
            'novaSenha' => ['nullable', 'string', 'min:8', 'max:255'],
            'confirmarNovaSenha' => ['nullable', 'string', 'min:8', 'max:255'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        if (!$cliente = $this->getAuthCliente())
            return response()->json(['error' => '"cliente" not found'], 404);

        $data = $request->all();
        $credenciais = [
            'email' => $cliente->email,
            'password' => $data['password']
        ];

        if(!$token = auth('cliente')->attempt($credenciais))
            return response()->json(['password' => 'Senha inválida'], 422);

        if(!$data['password'] === $data['novaSenha'])
            return response()->json(['novaSenha' => 'Não insira a mesma senha antiga'], 422);

        if(!$data['novaSenha'] === $data['confirmarNovaSenha'])
            return response()->json(['confirmarNovaSenha' => 'Insira a mesma senha'], 422);

        $cliente->password = password_hash($data['novaSenha'], PASSWORD_DEFAULT);
        $cliente->save();

        return response()->json("Senha alterada com sucesso", 201);
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
            'password' => ['required', 'string', 'min:8', 'max:255'],
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
