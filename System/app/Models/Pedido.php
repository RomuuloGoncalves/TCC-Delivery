<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable = [
        'valor_total',
        'valor_com_desconto',
        'data_pedido',
        'data_entrega',
        'data_pagamento',
        'status_pedido',
        'forma_pagamento',
        'cod_cliente',
        'cod_funcionario',
        'cod_endereco',
        'cod_cupom'
    ];


    public function cliente(): BelongsTo
    {
        return $this->belongsTo(Cliente::class, 'cod_cliente');
    }

    public function funcionario(): BelongsTo
    {
        return $this->belongsTo(Funcionario::class, 'cod_funcionario');
    }

    public function endereco(): BelongsTo
    {
        return $this->belongsTo(Endereco::class, 'cod_endereco');
    }

    public function cupom(): BelongsTo
    {
        return $this->belongsTo(Cupom::class, 'cod_cupom');
    }

    public function pedido_produtos(): HasMany
    {
        return $this->hasMany(PedidoProduto::class, 'cod_pedido');
    }
}
