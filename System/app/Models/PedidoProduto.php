<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PedidoProduto extends Model
{
    protected $fillable = [
        'cod_pedido',
        'cod_produto'
    ];
    
    public function pedido(): BelongsTo
    {
        return $this->belongsTo(Pedido::class, 'cod_pedido');
    }

    public function produto(): BelongsTo
    {
        return $this->belongsTo(Produto::class, 'cod_produto');
    }  

    public function pedido_produto_grupo_variacao(): HasMany
    {
        return $this->hasMany(PedidoProdutoGrupoVariacao::class, 'cod_pedido_produto');
    } 
}
