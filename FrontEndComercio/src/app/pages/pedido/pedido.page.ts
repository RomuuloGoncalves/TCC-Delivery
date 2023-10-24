import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from 'src/app/core/services/pedidos.service';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { Produto } from 'src/app/core/interfaces/produto';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor(private Pedidos: PedidosService, private Cliente: ClienteService, private route: ActivatedRoute) { }
  id_pedido!: number;

  loading: boolean = true

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_pedido = params['id_pedido'];
    });

    this.pegarPedido(Number(this.id_pedido))
  }
  pedidoCliente!: Pedido;
  cliente!: Cliente;
  produtos!: any;

  tabela!:any;
  infoModal:any = [];

  pegarPedido(id_pedido: number) {
    this.Pedidos.pegarPedidoID(id_pedido).subscribe(
      (response) => {
        console.log(response)
        this.cliente = response.cliente;
        this.pedidoCliente = response;
        this.produtos = this.pedidoCliente.pedido_produtos;
        this.loading = false;
        console.log(this.pedidoCliente)
        this.organizarProdutos();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  organizarProdutos() {
    const categorias: { [categoria: string]: Produto[] } = {};

    this.pedidoCliente.pedido_produtos.forEach((el: any) => {
      el.produto.imagem = el.produto.imagem || '../../../assets/imgs/default/cards-produtos.png';

      if (!categorias[el.produto.categoria.nome]) categorias[el.produto.categoria.nome] = [];

      categorias[el.produto.categoria.nome].push(el);
    });

    this.tabela = Object.entries(categorias);
  }

}
