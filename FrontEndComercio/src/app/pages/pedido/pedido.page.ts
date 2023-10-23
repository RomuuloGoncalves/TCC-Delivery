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
  marmitas: Produto[] = [];
  bebidas: Produto[] = [];
  sobremesas: Produto[] = [];
  acompanhamentos: Produto[] = [];
  combos: Produto[] = [];

  tabela!:any;
  infoTabela!: any;
  infoModal:any = [];

  pegarPedido(id_pedido: number) {
    this.Pedidos.pegarPedidoID(id_pedido).subscribe(
      (response) => {
        console.log(response)
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
    this.produtos.forEach((el:any) => {
      el.produto.imagem = el.produto.imagem || '../../../assets/imgs/default/cards-produtos.png';

      el.produto.categoria == 'Marmita Pronta' ? this.marmitas.push(el) : 1;
      el.produto.categoria == 'Combos' ? this.combos.push(el) : 1;
      el.produto.categoria == 'Bebida' ? this.bebidas.push(el) : 1;
      el.produto.categoria == 'Sobremesa' ? this.sobremesas.push(el) : 1;
      el.produto.categoria == 'Acompanhamento' ? this.acompanhamentos.push(el) : 1;
    })

    this.tabela = {
      marmitas: this.marmitas,
      bebidas: this.bebidas,
      sobremesas: this.sobremesas,
      acompanhamento: this.acompanhamentos,
      combos: this.combos,
    };

    this.infoTabela = Object.entries(this.tabela);
  }
}
