<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GrupoVariacao extends Model
{
    protected $table = "Grupo_variacoes";

    protected $fillable = [
        'tipo',
        'quantidade_variacoes_min',
        'quantidade_variacoes_max',
        'cod_produto',
    ];

    public $timestamps = false;

    public function produto(): BelongsTo
    {
        return $this->belongsTo(Produto::class, 'cod_produto');
    }

    public function variacao(): HasMany
    {
        return $this->hasMany(Variacao::class, 'cod_grupo_variacoes');
    }
}
