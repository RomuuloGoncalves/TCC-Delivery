<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Variacao extends Model
{
    protected $table = "Variacoes";

    protected $fillable = [
        'nome',
        'porcentagem_desconto',
        'valor_desconto',
        'valor_inicial',
        'imagem',
        'descricao',
        'cod_grupo_variacoes'
    ];

    public $timestamps = false;
    
    public function grupo_variacao(): BelongsTo
    {
        return $this->belongsTo(GrupoVariacao::class, 'cod_grupo_variacoes');
    }

    public function variacoes_selecionadas(): HasMany
    {
        return $this->hasMany(VariacaoSelecionada::class, 'cod_variacao');
    }
}
