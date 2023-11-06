import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
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

  alterarVariacoesSelecionadas(e: any) {
    let variacoes = e.detail.value.split(',')
    let repetiu = false
    this.variacoesSelecionadas.forEach(variacao => {
      variacao.grupo_variacao == variacoes[0] ? (variacao.variacao = variacoes[1],
        repetiu = true) : null
    });

    !repetiu ? (

      this.variacoesSelecionadas = [],
      this.variacoesSelecionadas.push(

        {
          grupo_variacao: {
            id: variacoes[1],
            tipo: variacoes[0]
          },
          variacao: {
            id: variacoes[3],
            nome: variacoes[2]
          },
          valor: variacoes[4]
        }
      )) : null

        this.precoTotal = this.calcPreco()

  }

  calcPreco() {
    let preco: number = 0
    this.variacoesSelecionadas.forEach(variacao => {
      preco += Number(variacao.valor)
    });
    return preco

  }
}
