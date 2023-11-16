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
        $router->post('/logout', 'ClienteController@logout');

        $router->group(['middleware' => 'authCliente'], function () use ($router) {
            $router->put('/editar', 'ClienteController@update');
            $router->get('/', 'ClienteController@index');
        });

        /*
        |--------------------------------------------------------------------------
        | Carrinho Routes
        |--------------------------------------------------------------------------
        */

        $router->group(['prefix' => 'carrinho'], function () use ($router) {
            $router->group(['middleware' => 'authCliente'], function () use ($router) {
                $router->get('/', 'PedidoController@showCarrinho');
                $router->post('/adicionar', 'PedidoProdutoController@store');
                $router->delete('/excluir/{id}', 'PedidoProdutoController@destroy');
                $router->put('/editar', 'PedidoProdutoController@update');
            });
        });

        /*
    |--------------------------------------------------------------------------
    | Endereço Routes
    |--------------------------------------------------------------------------
    */

        $router->group(['prefix' => 'endereco'], function () use ($router) {
            $router->group(['middleware' => 'authCliente'], function () use ($router) {
                $router->post('/cadastrar', 'EnderecoController@store');
                $router->get('/', 'EnderecoController@index');
                $router->put('/editar', 'EnderecoController@update');
                $router->delete('/excluir/{id}', 'EnderecoController@destroy');
            });
        });
    });

    /*
|--------------------------------------------------------------------------
| Funcionario Routes
|--------------------------------------------------------------------------
*/

    $router->group(['prefix' => 'funcionario'], function () use ($router) {
        $router->post('/login', 'FuncionarioController@login');
        $router->post('/logout', 'FuncionarioController@logout');

        $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
            $router->get('/', 'FuncionarioController@index');
            $router->post('/cadastrar', 'FuncionarioController@store');
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

        $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
            $router->post('/cadastrar', 'CupomController@store');
            $router->get('/', 'CupomController@index');
            $router->put('/editar', 'CupomController@update');
            $router->get('/{id}', 'CupomController@show');
            $router->delete('/excluir/{id}', 'CupomController@destroy');
        });
    });

    /*
|--------------------------------------------------------------------------
| Pedido Routes
|--------------------------------------------------------------------------
*/

    $router->group(['prefix' => 'pedido'], function () use ($router) {
        $router->put('/editar', 'PedidoController@update');
        $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
            $router->get('/', 'PedidoController@index');
            $router->get('/historico', 'PedidoController@historico');
            $router->get('/{id}', 'PedidoController@show');
            $router->get('/pedidos/{id}', 'PedidoController@showPedidosCliente');
        });
    });

    /*
|--------------------------------------------------------------------------
| Categoria Routes
|--------------------------------------------------------------------------
*/

    $router->group(['prefix' => 'categoria'], function () use ($router) {
        // $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
        $router->post('/cadastrar', 'CategoriaController@store');
        $router->delete('/excluir/{id}', 'CategoriaController@destroy');
        // });

        $router->get('/', 'CategoriaController@index');
        $router->get('/home', 'CategoriaController@showHome');
        $router->get('/{id}', 'CategoriaController@show');
    });

    /*
|--------------------------------------------------------------------------
| Produto Routes
|--------------------------------------------------------------------------
*/

    $router->group(['prefix' => 'produto'], function () use ($router) {
        $router->get('/{id}', 'ProdutoController@show');
        $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
            $router->get('/', 'ProdutoController@index');
        });

        $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
            $router->post('/cadastrar', 'ProdutoController@store');
            $router->put('/editar', 'ProdutoController@update');
            $router->delete('/excluir/{id}', 'ProdutoController@destroy');
        });
    });

    /*
|--------------------------------------------------------------------------
| Variacao Routes
|--------------------------------------------------------------------------
*/

    $router->group(['prefix' => 'variacao'], function () use ($router) {
        $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
            $router->post('/cadastrar', 'VariacaoController@store');
            $router->get('/', 'VariacaoController@index');
            $router->put('/editar', 'VariacaoController@update');
            $router->delete('/excluir/{id}', 'VariacaoController@destroy');
        });
    });

    /*
|--------------------------------------------------------------------------
| Grupo Variacao Routes
|--------------------------------------------------------------------------
*/

    $router->group(['prefix' => 'grupo-variacao'], function () use ($router) {
        $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
            $router->post('/cadastrar', 'GrupoVariacaoController@store');
            $router->get('/', 'GrupoVariacaoController@index');
            $router->get('/{cod_produto}', 'GrupoVariacaoController@show');
            $router->put('/editar', 'GrupoVariacaoController@update');
            $router->delete('/excluir/{id}', 'GrupoVariacaoController@destroy');
        });
    });

    /*
|--------------------------------------------------------------------------
| Pedido Produto Routes
|--------------------------------------------------------------------------
*/

    $router->group(['prefix' => 'pedido-produto'], function () use ($router) {
        $router->group(['middleware' => 'authCliente'], function () use ($router) {
            $router->get('/', 'PedidoProdutoController@index');
            $router->post('/cadastrar', 'PedidoProdutoController@store');
        });
    });

    /*
|--------------------------------------------------------------------------
| DashBoard
|--------------------------------------------------------------------------
*/

    $router->group(['prefix' => 'dashboard'], function () use ($router) {
        $router->group(['middleware' => 'authFuncionario'], function () use ($router) {
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
    });
