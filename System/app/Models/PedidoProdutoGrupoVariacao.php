<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PedidoProdutoGrupoVariacao extends Model
{
    protected $table = "Pedido_produto_grupo_variacoes";

    protected $fillable = [
        'quantidade',
        'cod_pedido_produto',
        'cod_variacao'
    ];

    public $timestamps = false;

    public function pedido_produto(): BelongsTo
    {
        return $this->belongsTo(PedidoProduto::class, 'cod_pedido_produto');
    }

    public function variacoes_selecionadas(): HasMany
    {
        return $this->hasMany(VariacaoSelecionada::class, 'cod_pedido_produto_grupo_variacoes');
    }
}
