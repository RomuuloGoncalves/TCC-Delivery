<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateCliente
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        try {
            $token = JWTAuth::getToken();
            $cliente = JWTAuth::parseToken()->authenticate();

            if (get_class($cliente) !== 'App\Models\Cliente')
                return response('Não autorizado', 403);

            return response()->json($user);
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
