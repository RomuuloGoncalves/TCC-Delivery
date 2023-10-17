import { Component, OnInit, ViewChild } from '@angular/core';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  @ViewChild('popover') popover: any

  constructor(private Produto: ProdutosService,) { }

  ngOnInit() {
    this.recuperarTodosProdutos()
  }

  loading: boolean = true

  marmitas: Produto[] = []
  bebidas: Produto[] = []
  sobremesas: Produto[] = []
  acompanhamentos: Produto[] = []
  combos: Produto[] = []

  isOpen = false;

  formularioPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  filtrar: { [chave: string]: boolean } = {
    "marmita": true,
    "bebida": true,
    "combo": true,
    "acompanhamento": true,
    "sobremesa": true
  }

  selectedOptions: string[] = ["marmita", "bebida", "combo", "acompanhamento", "sobremesa"]

  filtrarSelecao(e: any) {
    for (const [chave, valor] of Object.entries(this.filtrar)) {
      this.filtrar[chave] = false
    }

    e.detail.value.forEach((chave: any) => {
      if (this.filtrar.hasOwnProperty(chave)) {
        this.filtrar[chave] = true; // Definir o valor booleano como true se a chave existir no objeto
      }
    });
  }

  produtos!: Produto[]

  recuperarTodosProdutos() {
    this.Produto.pegarProdutos().subscribe(
      (response) => {
        this.produtos = response
        this.organizarProdutos()
        this.loading = false
      },
      (error) => {
        console.error(error);
      }
    );
  }

  organizarProdutos() {
    this.produtos.forEach((elemento) => {
      console.log(this.produtos)
      if(elemento.imagem == null || elemento.imagem == '')
        elemento.imagem = '../../../assets/imgs/default/cards-produtos.png'

      elemento.categoria!.nome == 'Marmita Pronta' ? this.marmitas.push(elemento) : 1
      elemento.categoria!.nome == 'Combos' ? this.combos.push(elemento) : 1
      elemento.categoria!.nome == 'Bebida' ? this.bebidas.push(elemento) : 1
      elemento.categoria!.nome == 'Sobremesa' ? this.sobremesas.push(elemento) : 1
      elemento.categoria!.nome == 'Acompanhamento' ? this.acompanhamentos.push(elemento) : 1
    })
  }

}
