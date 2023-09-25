import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/interfaces/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pedido: Pedido = {
    id_pedido: 2,
    valor_com_desconto: 100,
    data_pedido: "24/09/2023",
    data_entrega: "30/09/2023",
    data_pagamento: "25/09/2023",
    endereco_pedido: "Rua Exemplo, 123",
    forma_pagamento: "Cartão de Crédito",
    status: "Aguardando Pagamento",
    cliente: {
      nome: 'Inocêncio Coitadinho',
      email: 'ionocenciocoitadinhogamer@hotmail.com',
      telefone: '15999999999'
    },
    produtos: [
      {
        id_produto: 11,
        nome: 'Refrigerante',
        variacao: {
          id_variacao: 1,
          nome: 'Coca-Cola',
          valor_desconto: 5.00,
          valor_inicial: 7.00,
          descricao: 'Refrigerante Coca-Cola gelado',
          valor_final: 23.00,
          imagem: '../../../assets/imgs/default/cards-produtos.png'
        }
      },
      {
        id_produto: 11,
        nome: 'Marmita',
        variacao: {
          id_variacao: 1,
          nome: 'Coca-Cola',
          valor_desconto: 5.00,
          valor_inicial: 7.00,
          descricao: 'Refrigerante Coca-Cola gelado',
          valor_final: 23.00,
          imagem: '../../../assets/imgs/default/cards-produtos.png'
        }
      },
    ]
  }
}