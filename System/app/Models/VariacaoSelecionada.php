<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VariacaoSelecionada extends Model
{
    protected $fillable = [
        'cod_pedido_produto',
        'cod_variacao'
    ];

    public $timestamps = false;

    public function pedido_produto_grupo_variacao(): BelongsTo
    {
        return $this->belongsTo(PedidoProduto::class, 'cod_pedido_produto');
    }

    public function variacao(): BelongsTo
    {
        return $this->belongsTo(Variacao::class, 'cod_variacao');
    }
}
