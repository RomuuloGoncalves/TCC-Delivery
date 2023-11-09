import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
})
export class ModalProdutoComponent implements OnInit {
  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {}

  @Input() public isOpen: boolean = false;
  @Input() public produto?: Produto;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();

  loading: boolean = false;
  precoTotal!: number;
  quantidade: number = 1;

  variacoesSelecionadas: any[] = [];

  alterarVariacoesSelecionadas(e: any, grupoVariacao: GrupoVariacoes) {
    let variacao = JSON.parse(e.detail.value);

    this.variacoesSelecionadas = [];
    this.variacoesSelecionadas.push({
      grupo_variacao: grupoVariacao,
      variacao: variacao,
    });

    this.precoTotal = this.calcPreco();
  }

  // por mensagem bicha dizendo se foi ok
  public adicionarProduto() {
    this.produto
      ? ((this.produto.grupo_variacao = this.variacoesSelecionadas),
        (this.produto.quantidade = this.quantidade),
        this.carrinhoService.adicionarProduto(this.produto),
        (this.variacoesSelecionadas = []),
        this.fechar.emit())
      : null;
  }

  private calcPreco() {
    let preco: number = 0;
    this.variacoesSelecionadas.forEach((variacao) => {
      preco += Number(variacao.variacao.valor_inicial);
    });
    return preco;
  }

  stringify(obj: any) {
    return JSON.stringify(obj);
  }

  fecharModal() {
    this.variacoesSelecionadas = [];
    this.precoTotal = this.calcPreco();
    this.fechar.emit();
  }

}
