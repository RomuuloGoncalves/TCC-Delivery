<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VariacaoSelecionada extends Model
{
    protected $fillable = [
        'cod_pedido_produto_grupo_variacoes',
        'cod_variacao'
    ];

    public function pedido_produto_grupo_variacao(): BelongsTo
    {
        return $this->belongsTo(PedidoProdutoGrupoVariacao::class, 'cod_pedido_produto_grupo_variacoes');
    }

    public function variacao(): BelongsTo
    {
        return $this->belongsTo(Variacao::class, 'cod_variacao');
    }
}
