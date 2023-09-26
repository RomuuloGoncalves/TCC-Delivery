<?php

return [
    'defaults' => [
        'guard' => 'api',
        'senha' => 'clientes'
    ],
    'guards' => [
        'api' => [
            'driver' => 'jwt',
            'provider' => 'clientes'
        ],
    ],

    'providers' => [
        'clientes' => [
            'driver' => 'eloquent',
            'model' => \App\Models\Cliente::class
        ]
    ]
];
