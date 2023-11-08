import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
})
export class ModalProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public isOpen: boolean = false;
  @Input() public produto?: Produto;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();

  loading: boolean = false;
  precoTotal!: number;

  variacoesSelecionadas: any[] = [];

  stringify(obj: any) {
    return JSON.stringify(obj);
  }

  alterarVariacoesSelecionadas(e: any, grupoVariacao: GrupoVariacoes) {
    let variacao = JSON.parse(e.detail.value);

    this.variacoesSelecionadas = [];
    this.variacoesSelecionadas.push({
      grupo_variacao: grupoVariacao,
      variacao: variacao,
    });

    this.precoTotal = this.calcPreco();

  }

  calcPreco() {
    let preco: number = 0;
    this.variacoesSelecionadas.forEach(variacao => {
      preco += Number(variacao.valor);
    });
    return preco;
  }
}
