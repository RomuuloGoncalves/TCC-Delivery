import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModuleFactory, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { PedidoProduto } from 'src/app/core/interfaces/pedido-produto';
import { Produto } from 'src/app/core/interfaces/produto';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { CupomService } from 'src/app/core/services/cupom.service';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  constructor(
    private carrinhoService: CarrinhoService,
    private Produto: ProdutoService,
    private cupomService: CupomService,
    private Toast: ToastService
  ) {}

  ngOnInit() {
    this.carregarPagina();
  }

  @ViewChild('formCupom') private formCupom!: NgForm;

  frete: number = 25;
  subtotal: number = 0;
  total: number = 0;

  pedidoProdutos: PedidoProduto[] = [];

  cupomNome?: string;

  loading: boolean = true;

  carregarPagina() {
    this.loading = true;
    this.carrinhoService.produtos().subscribe(
      (response: PedidoProduto[]) => {
        this.pedidoProdutos = response;
        this.calcTotal();
        this.loading = false;
        // this.colocarImagensArray(this.pedidoProdutos)
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    );
  }

  // colocarImagensArray(array: any) {
  //   array.forEach((produtos: any) => {
  //   console.log(produtos)
  //   produtos.produtos.imagem = (produtos.produtos.imagem ) ? this.Produto.pegarImagem(produtos.produtos.imagem) : '../../../assets/imgs/default/garfo_faca_outline.png';
   
  //   })
  // }

  calcTotal() {
    this.subtotal = 0;
    this.pedidoProdutos.forEach((produto: PedidoProduto) => {
      produto.subtotal = produto.quantidade! * produto.total!;
      this.subtotal += produto.subtotal;
    });

    this.total = this.subtotal + this.frete;
  }

  removerProduto(pedidoProduto: PedidoProduto) {
    this.carrinhoService.removerProduto(pedidoProduto.id).subscribe(
      (reponse) => {
        const id = this.pedidoProdutos.indexOf(pedidoProduto);
        this.pedidoProdutos.splice(id, 1);
        this.Toast.mostrarToast('sucesso', 'Produto removido com sucesso!');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  resgatarCupom() {
    let cupom: Cupom = this.formCupom.form.value;
    this.cupomService.consultarNome(cupom).subscribe(
      (response: Cupom) => {
        this.carrinhoService.adicionarCupom(Number(response.id));
        this.Toast.mostrarToast('sucesso', 'Cupom encontrado!');
      },
      (badResponse: HttpErrorResponse) => {
        this.Toast.mostrarToast('erro', badResponse.error.message);
      }
    );
  }

  editarProduto(produto: PedidoProduto) {
    this.carrinhoService.editarProduto(produto).subscribe(
      (response: any) => {
        console.log(response);
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    )
  }
}
