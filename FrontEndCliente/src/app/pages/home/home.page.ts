import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { Produto } from 'src/app/core/interfaces/produto';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProdutoService } from 'src/app/core/services/produto.service';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(
    private Categoria: CategoriaService,
    private Produto: ProdutoService
  ) { }

  loading: boolean = true;

  categorias: Categoria[] = [];
  categoriasFiltradas: Categoria[] = [];

  produtoSelecionado?: Produto;
  isOpen: boolean = false;

  breakpoints = {
    975: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    976: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  ngOnInit() {
    this.carregarPagina();
  }

  private carregarPagina() {
    this.Categoria.listagem().subscribe(
      (response: Categoria[]) => {
        this.categorias = [...response];
        this.categoriasFiltradas = [...response];
        this.loading = false;
        this.colocarImagensArray(this.categorias)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  abrirModal(id: number) {
    this.isOpen = true;
    this.selecionarProduto(id);
  }

  selecionarProduto(id: number) {
    this.Produto.pegarProduto(id).subscribe(
      (response: any) => {
        this.produtoSelecionado = response;
        this.colocarImagem(this.produtoSelecionado)
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  colocarImagem(produto: any) {
    produto.imagem = (produto.imagem) ? this.Produto.pegarImagem(produto.imagem) : '../../../assets/imgs/default/garfo_faca_outline.png';
  }

  colocarImagensArray(array: any) {
    array.forEach((categoria: any) => {
      categoria.produtos.forEach((produto: any) => {
        console.log(produto.imagem)
        produto.imagem = (produto.imagem) ? this.Produto.pegarImagem(produto.imagem) : '../../../assets/imgs/default/garfo_faca_outline.png';
        console.log(produto.imagem)
      })
    })
  }

  fecharModal() {
    this.isOpen = false;
    setTimeout(() => {
      this.produtoSelecionado = undefined;
    }, 100);
  }
}
