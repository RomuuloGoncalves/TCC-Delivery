import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastService } from 'src/app/core/controller/toast.service';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
})
export class ModalProdutoComponent implements OnInit {
  constructor(
    private carrinhoService: CarrinhoService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  @Input() public isOpen: boolean = false;
  @Input() public produto?: Produto;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();

  precoTotal!: number;
  quantidade: number = 1;
  observacao: string = '';
  variacoesSelecionadas: any[] = [];

  alterarVariacoesSelecionadas(e: any, grupoVariacao: GrupoVariacoes) {
    let variacao = JSON.parse(e.detail.value);
    let contador = 0;
    this.variacoesSelecionadas.length
      ? (this.variacoesSelecionadas.forEach((variacaoSelecionada) => {
          contador += 1;
          if (
            variacaoSelecionada.grupo_variacao.id ===
            variacao.cod_grupo_variacoes
          )
            this.variacoesSelecionadas.splice(contador - 1);
        }),
        this.variacoesSelecionadas.push({
          grupo_variacao: grupoVariacao,
          variacao: variacao,
        }))
      : this.variacoesSelecionadas.push({
          grupo_variacao: grupoVariacao,
          variacao: variacao,
        });

    this.precoTotal = this.calcPreco();
  }

  public adicionarProduto() {
    const objProduto = {
      id: this.produto!.id,
      observacao: this.observacao,
      grupo_variacao: this.variacoesSelecionadas,
      quantidade: this.quantidade,
    };

    this.carrinhoService.adicionarProduto(objProduto).subscribe(
      (response: any) => {
        this.toastService.mostrarToast(
          'sucesso',
          'Produto adicionado com sucesso!'
        );
        this.fechar.emit();
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    );
  }

  private calcPreco() {
    let preco: number = 0;
    this.variacoesSelecionadas.forEach((variacao) => {
      preco += Number(variacao.variacao.valor);
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
