<?php

return [
    'defaults' => [
        'password_field' => 'password',
    ],
    'guards' => [
        'cliente' => [
            'driver' => 'jwt',
            'provider' => 'clientes'
        ],
        'funcionario' => [
            'driver' => 'jwt',
            'provider'=> 'funcionarios'
        ]
    ],

    'providers' => [
        'clientes' => [
            'driver' => 'eloquent',
            'model' => \App\Models\Cliente::class,
        ],
        'funcionarios' => [
            'driver' => 'eloquent',
            'model' => \App\Models\Funcionario::class,
        ]
    ]
];
