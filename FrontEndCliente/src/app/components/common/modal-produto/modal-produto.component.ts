import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastService } from 'src/app/core/controller/toast.service';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
})
export class ModalProdutoComponent implements OnInit {
  constructor(
    private carrinhoService: CarrinhoService,
    private toastService: ToastService,
    public Cliente: ClienteService
  ) {}

  ngOnInit() {}

  @Input() public isOpen: boolean = false;
  @Input() public produto?: Produto;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();

  precoTotal!: number;
  quantidade: number = 1;
  observacao: string = '';
  grupoVariacoesSelecionados: GrupoVariacoes[] = [];

  loading: boolean = false;

  alterarVariacoesSelecionadas(e: any, grupoVariacao: GrupoVariacoes) {
    let variacao = JSON.parse(e.detail.value);

    this.grupoVariacoesSelecionados!.length
      ? this.grupoVariacoesSelecionados!.forEach((grupo, id) => {
          if (grupo.id === variacao.cod_grupo_variacoes)
            this.grupoVariacoesSelecionados!.splice(id);
        })
      : null;

    this.grupoVariacoesSelecionados!.push({
      id: grupoVariacao.id,
      tipo: grupoVariacao.tipo,
      id_produto: grupoVariacao.id_produto,
      variacao: [variacao],
    });

    this.precoTotal = this.calcPreco();
  }

  public adicionarProduto() {
    this.loading = true;
    const objProduto = {
      id: this.produto!.id,
      observacao: this.observacao,
      grupo_variacao: this.grupoVariacoesSelecionados,
      quantidade: this.quantidade,
    };

    this.carrinhoService.adicionarProduto(objProduto).subscribe(
      (response: any) => {
        this.toastService.mostrarToast(
          'sucesso',
          'Produto adicionado com sucesso!'
        );

        setTimeout(() => {
          location.reload();
        }, 500);

        this.loading = false;
        this.fechar.emit();
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    );
  }

  private calcPreco() {
    let preco: number = 0;
    this.grupoVariacoesSelecionados.forEach((grupoVaricao) => {
      preco += Number(grupoVaricao.variacao![0].valor);
    });
    return preco * this.quantidade;
  }

  change(e: number) {
    this.quantidade = e;
    this.precoTotal = this.calcPreco();
  }

  stringify(obj: any) {
    return JSON.stringify(obj);
  }

  fecharModal() {
    this.grupoVariacoesSelecionados = [];
    this.precoTotal = this.calcPreco();
    this.fechar.emit();
  }
}
