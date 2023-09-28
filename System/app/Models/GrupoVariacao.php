<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GrupoVariacao extends Model
{
    protected $fillable = [
        'tipo',
        'quantidade_variacoes',
        'cod_produto',
        'cod_variacao', 
    ];

    public function produto(): BelongsTo
    {
        return $this->belongsTo(Produto::class);
    }

    public function variacao(): HasMany
    {
        return $this->hasMany(Variacao::class);
    }

    public function pedido_produto_grupo_variacao(): BelongsTo
    {
        return $this->belongsTo(PedidoProdutoGrupoVariacao::class);
    }
}
