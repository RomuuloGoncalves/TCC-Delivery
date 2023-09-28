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
        return $this->belongsTo(Pedido::class);
    }

    public function produto(): BelongsTo
    {
        return $this->belongsTo(Produto::class);
    }  

    public function pedido_produto_grupo_variacao(): BelongsTo
    {
        return $this->belongsTo(PedidoProdutoGrupoVariacao::class);
    } 
}
