<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class Cliente extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'nome', 'email', 'telefone'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var string[]
     */
    protected $hidden = [
        'senha',
    ];

    /**
     * Get all of the endereco for the ClienteModel
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function enderecos(): HasMany
    {
        return $this->hasMany(Endereco::class);
    }

    /**
     * Get all of the pedido for the ClienteModel
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function pedidos(): HasMany
    {
        return $this->hasMany(Pedido::class);
    }
}
