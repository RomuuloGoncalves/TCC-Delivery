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
  id_pedido!: any
  cod_cliente!: any

  loading: boolean = true

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_pedido = params['id_pedido'];
      this.cod_cliente = params['cod_cliente'];
    });

    this.pegarPedido(Number(this.id_pedido))
    this.pegarCliente(Number(this.cod_cliente))


  }
  pedidoCliente!: Pedido
  cliente!: Cliente
  produtos!: any
  marmitas:Produto[] = []
  bebidas:Produto[] = []
  sobremesas:Produto[] = []
  acompanhamentos:Produto[] = []
  combos:Produto[] = []

 tabela!:any
 infoTabela!: any
 infoModal:any = [] 

  pegarPedido(cod_pedido: any) {
    this.Pedidos.pegarPedidoID(cod_pedido).subscribe(
      (response) => {
        console.log("pedido", response)
        this.pedidoCliente = response
        this.produtos = this.pedidoCliente.pedido_produtos
        console.log(this.produtos)
        this.loading = false
        this.organizarProdutos()
      },
      (error) => {
        console.error(error);
      }
    );
  }

  pegarCliente(cod_cliente: any) {
    this.Cliente.pegarCliente(cod_cliente).subscribe(
      (response) => {
        this.cliente = response
      },
      (error) => {
        console.error(error);
      }
    );
  }

  organizarProdutos() {
    this.produtos.forEach((elemento:any) => {
      console.log(elemento)
      if(elemento.imagem == null || elemento.imagem == '')
        elemento.produto.imagem = '../../../assets/imgs/default/cards-produtos.png'
      
      elemento.produto.categoria == 'Marmita Pronta' ? this.marmitas.push(elemento) : 1
      elemento.produto.categoria == 'Combos' ? this.combos.push(elemento) : 1
      elemento.produto.categoria == 'Bebida' ? this.bebidas.push(elemento) : 1
      elemento.produto.categoria == 'Sobremesa' ? this.sobremesas.push(elemento) : 1
      elemento.produto.categoria == 'Acompanhamento' ? this.acompanhamentos.push(elemento) : 1
    })

    this.tabela = {
      marmitas: this.marmitas,
      bebidas: this.bebidas,
      sobremesas: this.sobremesas,
      acompanhamento: this.acompanhamentos,
      combos: this.combos,
    }

    this.infoTabela = Object.entries(this.tabela)
    
  }
}
