<?php

/** @var \Laravel\Lumen\Routing\Router $router */
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'cliente'], function() use($router) {
    $router->post('/cadastrar', 'ClienteController@store');
    $router->post('/login', 'ClienteController@login');
    $router->get('/{id}', 'ClienteController@list');
});

$router->group(['prefix' => 'funcionario'], function() use($router) {
    $router->post('/cadastrar', 'FuncionarioController@store');
    $router->post('/login', 'FuncionarioController@login');
});

$router->group(['prefix' => 'cupom'], function() use($router) {
    $router->get('/', 'CupomController@index');
    $router->get('/{id}', 'CupomController@list');
    $router->delete('/excluir/{id}', 'CupomController@destroy');
    $router->post('/cadastrar', 'CupomController@store');
    $router->post('/usar', 'CupomController@usar');
    $router->put('/editar', 'CupomController@update');
});

$router->group(['prefix' => 'endereco'], function() use($router) {
    $router->post('/cadastrar', 'EnderecoController@store');
    $router->put('/editar', 'EnderecoController@update');
    $router->get('/listar', 'EnderecoController@list');
    $router->delete('/excluir/{id}', 'EnderecoController@destroy');
});

$router->group(['prefix' => 'pedido'], function() use($router) {
    $router->get('/', 'PedidoController@list');
    $router->get('/{id}', 'PedidoController@pedID');
});

$router->group(['prefix' => 'produto'], function() use($router) {
    $router->get('/', 'ProdutoController@index');
    $router->delete('/excluir/{id}', 'ProdutoController@destroy');
    $router->post('/cadastrar', 'ProdutoController@store');
    $router->put('/editar', 'ProdutoController@update');
});