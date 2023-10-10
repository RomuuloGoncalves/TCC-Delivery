<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PedidoProdutoGrupoVariacao extends Model
{
    protected $fillable = [
        'cod_pedido_produto',
        'cod_grupo_variacoes',
        'cod_variacao'
    ];
    public function pedido_produto(): BelongsTo
    {
        return $this->belongsTo(PedidoProduto::class, 'cod_pedido_produto');
    }

    public function grupo_variacao(): HasMany
    {
        return $this->hasMany(GrupoVariacao::class);
    }
}
