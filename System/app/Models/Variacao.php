<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Variacao extends Model
{
    protected $fillable = [
        'nome',
        'porcentagem_desconto',
        'valor_desconto',
        'valor_inicial',
        'imagem',
        'descricao'
    ];

    public function variacao(): HasMany
    {
        return $this->hasMany(Variacao::class);
    }

    public function grupo_variacao(): BelongsTo
    {
        return $this->belongsTo(GrupoVariacao::class);
    }
}
