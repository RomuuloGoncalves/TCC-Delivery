import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
})
export class ModalProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.carregarProduto();
  }

  @Input() public id!: number;
  @Input() public isOpen: boolean = false;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();

  produto!: Produto;
  loading: boolean = true;
  precoTotal!: number;

  carregarProduto() {
    this.produtoService.pegarProduto(this.id).subscribe(
      (response) => {
        this.produto = response;
        this.loading = false;
      },
      (error) => {
        console.error(error);
      }
    )
  }

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
