import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-criacao-combos',
  templateUrl: './criacao-combos.page.html',
  styleUrls: ['./criacao-combos.page.scss'],
})
export class CriacaoCombosPage implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(this.dadoFinal);
  }

  produtoSelecionado: any = [];
  selecionado: any = []

  produtoSelecionadoSelect(e: any, grupo: any) {
    this.produtoSelecionado = e.detail.value;
    this.selecionado.push([grupo, this.produtoSelecionado])


    console.log(this.selecionado);
  }

  criarSelect(e: any) {
    console.log(e)

    console.log(Object.keys(e))
  }

  marmitas: Produto[] = [
    { nome: 'Marmita de frango' },
    { nome: 'Marmita de bife' },
    { nome: 'Marmita de arroz' },
  ];

  sobremesas: Produto[] = [
    { nome: 'bolo de cenoura' },
    { nome: 'bolo de chocolate' },
    { nome: 'bolo de morango' },
  ];

  saladas: Produto[] = [
    { nome: 'Salada X' },
    { nome: 'Salada y' },
  ];

  refrigerante: Produto[] = [
    { nome: 'Coca-Cola' },
    { nome: 'Pepsi' },
    { nome: 'Guaraná Antarctica' },
  ];

  suco: Produto[] = [
    { nome: 'Suco de Laranja' },
    { nome: 'Suco de Maçã' },
    { nome: 'Suco de Uva' },
  ];

  cha: Produto[] = [
    { nome: 'Chá de Camomila' },
    { nome: 'Chá Verde' },
    { nome: 'Chá de Hortelã' },
  ];

  comidas = {
    marmitas: this.marmitas,
    sobremesas: this.sobremesas,
    saladas: this.saladas,
  };

  bebidas = {
    refrigerante: this.refrigerante,
    suco: this.suco,
    cha: this.cha,
  };

  dados = {
    comidas: Object.entries(this.comidas),
    bebidas: Object.entries(this.bebidas),
  };

  dadoFinal = Object.entries(this.dados);
}
