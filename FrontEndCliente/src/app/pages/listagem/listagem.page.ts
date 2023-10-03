import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  constructor(private route: ActivatedRoute, private Router: Router) {}

  nomeProduto!: any;

  ngOnInit() {
    this.nomeProduto = this.route.snapshot.paramMap.get('produto');

    if (!this.ehStringValida(this.nomeProduto)) this.Router.navigate(['..']);

    this.nomeProduto =
      this.nomeProduto[0].toUpperCase() + this.nomeProduto.slice(1);
  }

  filtrar: { [chave: string]: boolean } = {
    marmita: true,
    bebida: true,
    combo: true,
    acompanhamento: true,
  };

  selectedOptions: string = 'nenhum';

  loading: boolean = false;
  produto: Produto = {
    id_produto: 1,
    nome: 'Doces',
    variacoes: [
      {
        id_variacao: 1,
        nome: 'Pudim',
        valor_desconto: 15.0,
        valor_inicial: 19.5,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/imgs/home-icons/garfo_faca_outline.png',
      },
      {
        id_variacao: 1,
        nome: 'Arroz Doce',
        valor_desconto: 15.0,
        valor_inicial: 19.5,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/imgs/home-icons/garfo_faca_outline.png',
      },
      {
        id_variacao: 1,
        nome: 'Angu',
        valor_desconto: 15.0,
        valor_inicial: 19.5,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/imgs/home-icons/garfo_faca_outline.png',
      },
      {
        id_variacao: 1,
        nome: 'Angu',
        valor_desconto: 15.0,
        valor_inicial: 19.5,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/imgs/home-icons/garfo_faca_outline.png',
      },
      {
        id_variacao: 1,
        nome: 'Angu',
        valor_desconto: 15.0,
        valor_inicial: 19.5,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/imgs/home-icons/garfo_faca_outline.png',
      },
      {
        id_variacao: 1,
        nome: 'Angu',
        valor_desconto: 15.0,
        valor_inicial: 19.5,
        valor_final: 33,
        descricao: 'Bata muito boa tipo muito muito boa mesmo',
        imagem: '../../../assets/imgs/home-icons/garfo_faca_outline.png',
      },
    ],
  };

  produtoFiltrado: Produto = this.produto;

  ehStringValida(str: string) {
    const regexString: RegExp = /^[A-Za-z]+$/;
    return regexString.test(str);
  }

  filtrarSelecao(e: any) {
    for (const [chave, valor] of Object.entries(this.filtrar)) {
      this.filtrar[chave] = false;
    }

    e.detail.value.forEach((chave: any) => {
      if (this.filtrar.hasOwnProperty(chave)) {
        this.filtrar[chave] = true;
      }
    });
  }

  filtrarPesquisa(event: any) {
    const pesquisa: string = event.detail.value.toLowerCase().trim();

    this.produtoFiltrado = {
      id_produto: this.produto.id_produto,
      nome: this.produto.nome,
      variacoes: [
        ...this.produto.variacoes!.filter((variacao: Variacao) => {
          const nomeVariacao: string = variacao.nome.toLowerCase().trim();
          return (
            nomeVariacao.startsWith(pesquisa) || nomeVariacao.endsWith(pesquisa)
          );
        }),
      ],
    };
  }


  // produtoModal?: Produto
  // definirProdutoModal(produto: Produto) {
  //   this.produtoModal = produto
  //   this.abrirModal(this.produtoModal)
  // }

  // async abrirModal(produto: any) {
  //   const modal = await this.modalController.create({
  //     component: ModalMarmitaComponent, // Substitua pelo seu modal
  //     componentProps: {
  //       produto: produto // Passe os dados como propriedades para o modal
  //     }
  //   });

  //   return await modal.present()

  // }

}
