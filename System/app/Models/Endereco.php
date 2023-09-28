<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Endereco extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome',
        'complemento',
        'bairro', 
        'numero',
        'rua', 
        'cep',
        'cod_cliente'
    ];
    public function cliente(): BelongsTo
    {
        return $this->belongsTo(cliente::class);
    }
}
