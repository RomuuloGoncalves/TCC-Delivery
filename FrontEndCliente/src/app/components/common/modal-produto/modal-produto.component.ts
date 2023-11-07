import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private produtoService: ProdutoService) { }

  ngOnInit() {
    console.log(this.id);
    this.carregarProduto();
  }

  @Input() id: any;
  produto!: Produto;
  loading: boolean = true
  precoTotal!: number

  carregarProduto() {
    this.produtoService.pegarProduto(this.id).subscribe(
      (response) => {
        console.log("reponse", response)
        this.produto = response;
        this.loading = false
      },
      (error) => {
        console.log(error)
      }
    )
  }

  variacoesSelecionadas: any[] = []

  produtoModal = this.navParams.get('produto')

  fecharModal() {
    this.modalController.dismiss();
  }

  stringify(obj: any) {
    return JSON.stringify(obj);
  }

  alterarVariacoesSelecionadas(e: any, grupoVariacao: GrupoVariacoes) {
    let variacao = JSON.parse(e.detail.value);
    console.log(variacao)

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
      preco += Number(variacao.valor)
    });
    return preco;
  }
}
