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
});

$router->group(['prefix' => 'funcionario'], function() use($router) {
    $router->post('/cadastrar', 'FuncionarioController@store');
    $router->post('/login', 'FuncionarioController@login');
});

$router->group(['prefix' => 'cupom'], function() use($router) {
    $router->post('/cadastrar', 'CupomController@store');
    $router->get('/usar', 'CupomController@usar');
    $router->get('/listar', 'CupomController@listar');

});
