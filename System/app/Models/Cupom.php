<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cupom extends Model
{
    protected $table = "Cupons";
    use HasFactory;
    protected $fillable = [
        'nome',
        'porcentagem_desconto',
        'valor_desconto',
        'data_validade', 
        'quantidade',
        'status'
    ];

    public function pedido(): BelongsTo
    {
        return $this->belongsTo(Pedido::class);
    }
}
