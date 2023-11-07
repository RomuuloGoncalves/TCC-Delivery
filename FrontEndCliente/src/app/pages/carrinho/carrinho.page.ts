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
    this.calcTotal();
  }

  frete: number = 25;
  subtotal: number = 0;
  total: number = 0;

  produtos: Produto[] = [
    {
      id_produto: 2,
      nome: 'Porções',
      quantidade: 3,
      variacao: {
        id: 1,
        nome: 'Batata Frita',
        valor_desconto: 4.0,
        valor_inicial: 19.5,
        valor_final: 14.5,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/imgs/home-icons/garfo_faca_outline.png',
      },
    },
    {
      id_produto: 1,
      nome: 'Doces',
      quantidade: 2,
      variacao: {
        id: 1,
        nome: 'Pudim',
        valor_desconto: 4.0,
        valor_inicial: 12.5,
        valor_final: 8.5,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/imgs/home-icons/garfo_faca_outline.png',
      },
    },
  ];

  calcTotal () {
    this.subtotal = 0;
    this.produtos.forEach((produto: Produto) => {
      produto.subtotal = produto.quantidade! * produto.variacao?.valor_final!;
      this.subtotal += produto.subtotal;
    });

    this.total = this.subtotal + this.frete;
  }

  removerProduto(e: number) {
    this.carrinhoService.removerProduto(e).subscribe()
  }

  @ViewChild('formCupom') private formCupom!: NgForm;
  cupomNome?: string

  resgatarCupom() {
    let cupom: Cupom = this.formCupom.form.value
    this.cupomService.consultarNome(cupom).subscribe(
      (response: Cupom) => {
        this.Toast.mostrarToast('sucesso', 'Cupom encontrado!');
      },
      (badResponse: HttpErrorResponse) => {
        this.Toast.mostrarToast('erro', badResponse.error.message);
      }
    )
  }


}
