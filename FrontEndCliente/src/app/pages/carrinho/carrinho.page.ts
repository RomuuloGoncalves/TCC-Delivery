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
  cupom?: Cupom;

  loading: boolean = true;
  loadingCupom: boolean = false;

  carregarPagina() {
    this.loading = true;
    this.carrinhoService.produtos().subscribe(
      (response: any) => {
        this.pedidoProdutos = response.pedido_produtos;
        this.cupom = response.cupom;

        this.calcTotal();
        this.loading = false;
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    );
  }

  calcTotal() {
    this.subtotal = 0;
    this.pedidoProdutos.forEach((produto: PedidoProduto) => {
      produto.subtotal = produto.quantidade! * produto.total!;
      this.subtotal += produto.subtotal;
    });

    const aux = this.subtotal + this.frete;
    this.total = (!this.cupom)
      ? aux
      : (aux) - aux*0.01*this.cupom!.porcentagem_desconto!;
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
    this.loadingCupom = true;
    let cupom: Cupom = this.formCupom.form.value;
    this.cupomService.usarCupom(cupom).subscribe(
      (response: Cupom) => {
        this.carrinhoService.adicionarCupom(Number(response.id));
        this.Toast.mostrarToast('sucesso', 'Cupom encontrado!');
        this.loadingCupom = false;
        setTimeout(() => {
          location.reload()
        }, 500);
      },
      (badResponse: HttpErrorResponse) => {
        this.Toast.mostrarToast('erro', badResponse.error.message);
        this.loadingCupom = false;
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
    );
  }
}
