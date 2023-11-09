import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModuleFactory, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { Produto } from 'src/app/core/interfaces/produto';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { CupomService } from 'src/app/core/services/cupom.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  constructor(private carrinhoService: CarrinhoService, private cupomService: CupomService, private Toast: ToastService) {}

  ngOnInit() {
    this.carregarPagina();
  }
  
  @ViewChild('formCupom') private formCupom!: NgForm;

  frete: number = 25;
  subtotal: number = 0;
  total: number = 0;

  produtos: Produto[] = [
  ];

  cupomNome?: string;

  loading: boolean = true;

  carregarPagina() {
    this.loading = true;
    this.carrinhoService.produtos().subscribe(
      (response: Produto[]) => {
        this.produtos = response;
        this.calcTotal();
        this.loading = false;
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    )
  }

  calcTotal () {
    this.subtotal = 0;
    this.produtos.forEach((produto: Produto) => {
      produto.subtotal = produto.quantidade! * produto.variacao?.valor!;
      this.subtotal += produto.subtotal;
    });

    this.total = this.subtotal + this.frete;
  }

  removerProduto(e: number) {
    this.carrinhoService.removerProduto(e).subscribe();
  }

  resgatarCupom() {
    let cupom: Cupom = this.formCupom.form.value
    this.cupomService.consultarNome(cupom).subscribe(
      (response: Cupom) => {
        this.Toast.mostrarToast('sucesso', 'Cupom encontrado!');
      },
      (badResponse: HttpErrorResponse) => {
        this.Toast.mostrarToast('erro', badResponse.error.message);
      }
    );
  }
}
