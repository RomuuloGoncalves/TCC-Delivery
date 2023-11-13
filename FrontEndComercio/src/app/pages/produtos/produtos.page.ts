import { Component, OnInit, ViewChild } from '@angular/core';
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

  produtoSelecionado!: Produto;
  openPopover: boolean = false;
  isOpen: boolean = false;
  loading: boolean = true
  isModalOpen = false;

  produtos!: Produto[]
  produtosOrganizados!: any;

  filtrar: { [chave: string]: boolean } = {};
  selectedOptions: string[] = []

  formularioPopover(e: Event) {
    this.popover.event = e;
    this.openPopover = true;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  filtrarSelecao(e: any) {
    for (const [chave, valor] of Object.entries(this.filtrar)) {
      this.filtrar[chave] = false
    }

    e.detail.value.forEach((chave: any) => {
      if (this.filtrar.hasOwnProperty(chave)) {
        this.filtrar[chave] = true;
      }
    });
  }

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
    const categorias: { [categoria: string]: Produto[] } = {};

    this.produtos.forEach((el: any) => {
      el.imagem = (el.imagem) ? this.Produto.pegarImagem(el.imagem) : '../../../assets/imgs/default/cards-produtos.png';
      console.log(el.imagem_url)
      if (!categorias[el.categoria.nome]) categorias[el.categoria.nome] = [];
      categorias[el.categoria.nome].push(el);
    });

    this.produtosOrganizados = Object.entries(categorias);
    this.criarFiltro()
  }

  criarFiltro() {
    this.produtosOrganizados.forEach((categoria: any) => {
      this.filtrar[categoria[0]] = true;
      this.selectedOptions.push(categoria[0])
    });
    console.log(this.filtrar);
  }

  selecionarProduto(produto: Produto) {
    this.produtoSelecionado = produto;
    this.isOpen = true;
  }
}