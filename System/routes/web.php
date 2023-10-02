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
    $router->get('/listar', 'ClienteController@list');
});

$router->group(['prefix' => 'funcionario'], function() use($router) {
    $router->post('/cadastrar', 'FuncionarioController@store');
    $router->post('/login', 'FuncionarioController@login');
});

$router->group(['prefix' => 'cupom'], function() use($router) {
    $router->post('/cadastrar', 'CupomController@store');
    $router->post('/usar', 'CupomController@usar');
    $router->get('/listar', 'CupomController@list');
    $router->post('/editar', 'CupomController@update');
    $router->post('/excluir', 'CupomController@delete');
});

$router->group(['prefix' => 'endereco'], function() use($router) {
    $router->post('/cadastrar', 'EnderecoController@store');
    $router->post('/editar', 'EnderecoController@update');
    $router->get('/listar', 'EnderecoController@list');
    $router->post('/excluir', 'EnderecoController@delete');
});

$router->group(['prefix' => 'pedido'], function() use($router) {
    $router->get('/listar', 'PedidoController@list');
    $router->get('/pedidoCliente', 'PedidoController@pedCliente');
    $router->get('/pedidoID', 'PedidoController@pedID');
});
