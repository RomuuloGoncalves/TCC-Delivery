import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/core/interfaces/pedido';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ActivatedRoute } from '@angular/router';
import { PedidosService } from 'src/app/core/services/pedidos.service';
import { Produto } from 'src/app/core/interfaces/produto';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/app/core/controller/toast.service';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  constructor(
    private Pedidos: PedidosService,
    private route: ActivatedRoute,
    private Toast: ToastService
  ) {}

  idPedido!: number;
  loading: boolean = true;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idPedido = Number(params['id']);
    });

    this.carregarPagina(Number(this.idPedido));
  }

  pedidoCliente!: Pedido;
  cliente!: Cliente;
  produtos!: any;

  tabela!: any;
  infoModal: any = [];

  carregarPagina(idPedido: number) {
    this.loading = true;
    this.Pedidos.pegarPedidoID(idPedido).subscribe(
      (response) => {
        this.cliente = response.cliente;
        this.pedidoCliente = response;
        this.produtos = this.pedidoCliente.pedido_produtos;
        this.loading = false;
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
      el.produto.imagem =
        el.produto.imagem || '../../../assets/imgs/default/cards-produtos.png';
      if (!categorias[el.produto.categoria.nome])
        categorias[el.produto.categoria.nome] = [];
      categorias[el.produto.categoria.nome].push(el);
    });

    this.tabela = Object.entries(categorias);
  }

  editarStatusPedido(event: any) {
    const status = event.detail.value;
    this.Pedidos.editarStatusPedido(this.idPedido, status).subscribe(
      (response: Pedido) => {
        this.pedidoCliente = response;
        this.Toast.mostrarToast('sucesso', 'Status do pedido alterado com sucesso!');
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    )
  }
}
