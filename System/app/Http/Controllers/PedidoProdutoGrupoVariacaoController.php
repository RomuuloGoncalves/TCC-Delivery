<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GrupoVariacao;
use App\Models\PedidoProdutoGrupoVariacao;
use App\Models\VariacaoSelecionada;

class PedidoProdutoGrupoVariacaoController extends Controller
{
    public function __construct() {}
    public function index() {
        $ped_prod_grupo_vars = PedidoProdutoGrupoVariacao::all();
        foreach($ped_prod_grupo_vars as $ped_prod_grupo_var) {
            $ped_prod_grupo_var->variacao_selecionadas = VariacaoSelecionada::with(['variacao'])->where('cod_pedido_produto_grupo_variacoes', $ped_prod_grupo_var->id)->get();
            foreach($ped_prod_grupo_var->variacao_selecionadas as $variacao_selecionada) {
                $grupo_variacao = GrupoVariacao::find($variacao_selecionada->variacao->cod_grupo_variacoes);
                $variacao_selecionada->variacao->grupo_variacao = $grupo_variacao->tipo;
            }
        }
        return response()->json($ped_prod_grupo_vars, 200);
    }
    public function show(int $id) {
        $ped_prod_grupo_var = PedidoProdutoGrupoVariacao::find($id);
        $ped_prod_grupo_var->variacao_selecionadas = VariacaoSelecionada::with(['variacao'])->where('cod_pedido_produto_grupo_variacoes', $id)->get();
        foreach($ped_prod_grupo_var->variacao_selecionadas as $variacao_selecionada) {
            $grupo_variacao = GrupoVariacao::find($variacao_selecionada->variacao->cod_grupo_variacoes);
            $variacao_selecionada->variacao->grupo_variacao = $grupo_variacao->tipo;
        }
        return response()->json($ped_prod_grupo_var, 200);
    }
}
