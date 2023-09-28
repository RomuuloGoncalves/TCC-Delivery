<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Produto extends Model
{
    protected $fillable = [
        'nome',
        'descricao',
        'categoria'
    ];

    public function pedido_produto(): HasMany
    {
        return $this->hasMany(PedidoProduto::class);
    }

    public function grupo_variacao(): HasMany
    {
        return $this->hasMany(GrupoVariacao::class);
    }
}
