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


/*
|--------------------------------------------------------------------------
| Cliente Routes
|--------------------------------------------------------------------------
*/


$router->group(['prefix' => 'cliente'], function () use ($router) {
    $router->post('/cadastrar', 'ClienteController@store');
    $router->post('/login', 'ClienteController@login');

    $router->group(['middleware' => 'authCliente'], function () use ($router) {
        $router->get('/', 'ClienteController@index');
    });
});

/*
|--------------------------------------------------------------------------
| Funcionario Routes
|--------------------------------------------------------------------------
*/


$router->group(['prefix' => 'funcionario'], function () use ($router) {
    $router->post('/login', 'FuncionarioController@login');
    $router->post('/cadastrar', 'FuncionarioController@store');
    $router->group(['middleware' => 'authFuncionario'], function() use($router) {
        $router->get('/', 'FuncionarioController@index');
    });
});


/*
|--------------------------------------------------------------------------
| Cupom Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'cupom'], function () use ($router) {
    $router->group(['middleware' => 'authCliente'], function () use ($router) {
        $router->post('/usar', 'CupomController@usar');
    });

    $router->get('/', 'CupomController@index');
    $router->get('/{id}', 'CupomController@show');
    $router->delete('/excluir/{id}', 'CupomController@destroy');
    $router->post('/cadastrar', 'CupomController@store');
    $router->put('/editar', 'CupomController@update');
});

/*
|--------------------------------------------------------------------------
| Endereco Routes
|--------------------------------------------------------------------------
*/

$router->group(['middleware' => 'authCliente'], function () use ($router) {
    $router->group(['prefix' => 'cliente/endereco'], function () use ($router) {
        $router->post('/cadastrar', 'EnderecoController@store');
        $router->put('/editar', 'EnderecoController@update');
        $router->get('/', 'EnderecoController@index');
        $router->delete('/excluir/{id}', 'EnderecoController@destroy');
    });
});

/*
|--------------------------------------------------------------------------
| Pedido Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'pedido'], function () use ($router) {
    $router->get('/', 'PedidoController@index');
    $router->get('/historico', 'PedidoController@historico');
    $router->get('/{id}', 'PedidoController@show');
});

/*
|--------------------------------------------------------------------------
| Cliente Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'categoria'], function () use ($router) {
    $router->get('/', 'CategoriaController@index');
    $router->get('/{nome}', 'CategoriaController@pegarCategoriaNome');
    $router->delete('/excluir/{id}', 'CategoriaController@destroy');
    $router->post('/cadastrar', 'CategoriaController@store');
});

/*
|--------------------------------------------------------------------------
| Produto Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'produto'], function () use ($router) {
    $router->get('/', 'ProdutoController@index');
    $router->delete('/excluir/{id}', 'ProdutoController@destroy');
    $router->post('/cadastrar', 'ProdutoController@store');
    $router->put('/editar', 'ProdutoController@update');
    $router->get('/{id}', 'ProdutoController@show');
});

/*
|--------------------------------------------------------------------------
| Variacao Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'variacao'], function () use ($router) {
    $router->get('/', 'VariacaoController@index');
    $router->delete('/excluir/{id}', 'VariacaoController@destroy');
    $router->post('/cadastrar', 'VariacaoController@store');
    $router->put('/editar', 'VariacaoController@update');
});

/*
|--------------------------------------------------------------------------
| Grupo Variacao Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'grupo-variacao'], function () use ($router) {
    $router->get('/', 'GrupoVariacaoController@index');
    $router->get('/{cod_produto}', 'GrupoVariacaoController@show');
    $router->delete('/excluir/{id}', 'GrupoVariacaoController@destroy');
    $router->post('/cadastrar', 'GrupoVariacaoController@store');
    $router->put('/editar', 'GrupoVariacaoController@update');
});

/*
|--------------------------------------------------------------------------
| ped-prod-grupo-var
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'ped-prod-grupo-var'], function () use ($router) {
    $router->get('/', 'PedidoProdutoGrupoVariacaoController@index');
    $router->get('/{id}', 'PedidoProdutoGrupoVariacaoController@show');
});

/*
|--------------------------------------------------------------------------
| DashBoard
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'dashboard'], function () use ($router) {
    $router->get('/rendimento/help', 'DashboardController@help');
    $router->get('/rendimento/semanal', 'DashboardController@rendimento_semanal');
    $router->get('/rendimento/mensal', 'DashboardController@rendimento_mensal');
    $router->get('/rendimento/anual', 'DashboardController@rendimento_anual');

    $router->get('/vendas/semanais', 'DashboardController@vendas_semanais');
    $router->get('/vendas/mensais', 'DashboardController@vendas_mensais');
    $router->get('/vendas/anual', 'DashboardController@vendas_anuais');

    $router->get('/categoria/semanal', 'DashboardController@categoria_semanal');
    $router->get('/categoria/mensal', 'DashboardController@categoria_mensal');
    $router->get('/categoria/anual', 'DashboardController@categoria_anual');

});
