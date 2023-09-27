<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pedido extends Model
{
    use HasFactory;

    /**
     * Get the clientes that owns the PedidoModel
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function cliente(): BelongsTo
    {
        return $this->belongsTo(cliente::class);
    }

    /**
     * Get all of the cupons for the PedidoModel
     *
     */
    public function cupom(): BelongsTo
    {
        return $this->belongsTo(Cupom::class);
    }
}
