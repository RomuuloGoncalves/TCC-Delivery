import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { PassarMarmitaService } from 'src/app/core/services/passar-marmita.service';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-modal-marmita',
  templateUrl: './modal-marmita.component.html',
  styleUrls: ['./modal-marmita.component.scss'],
})
export class ModalMarmitaComponent implements OnInit {

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private passarMarmita: PassarMarmitaService,
    private produtoService: ProdutoService) { }

  ngOnInit() {
    console.log(this.id);
    this.carregarProduto();
  }

  @Input() id: any;
  produto!: Produto;
  loading: boolean = true

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

  chamarDefinirMarmita(produto: Produto) {
    this.passarMarmita.definirMarmita(produto)
  }

  alterarVariacoesSelecionadas(e: any) {
    console.log("aa")
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
        }
      )) : null
    console.log(this.variacoesSelecionadas)
  }
}
