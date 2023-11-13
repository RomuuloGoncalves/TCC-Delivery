import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { Produto } from 'src/app/core/interfaces/produto';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProdutoService } from 'src/app/core/services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private Router: Router,
    private categoriaService: CategoriaService,
    private Produto: ProdutoService
  ) {}

  idProduto!: any;
  loading: boolean = true;
  categorias: Categoria[] = [];
  categoriasFiltradas: Categoria[] = [];
  produtoSelecionado?: Produto;
  isOpen: boolean = false;

  ngOnInit() {
    if (!this.ehStringValida(this.idProduto)) this.Router.navigate(['..']);
    this.idProduto = this.route.snapshot.paramMap.get('produto');
    console.log(this.idProduto)
    this.carregarPagina();
  }

  private carregarPagina() {
    this.categoriaService.pegarCategoria(Number(this.idProduto)).subscribe(
      (response: Categoria[]) => {
        this.categorias = response;
        this.categoriasFiltradas = response;
        this.loading = false;
        this.colocarImagensArray(this.categorias)
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    )
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

  ehStringValida(str: string) {
    const regexString: RegExp = /^[A-Za-z]+$/;
    return regexString.test(str);
  }
  abrirModal(id: number) {
    this.isOpen = true;
    this.selecionarProduto(id);
  }

  selecionarProduto(id: number) {
    this.Produto.pegarProduto(id).subscribe(
      (response: any) => {
        this.produtoSelecionado = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  fecharModal() {
    this.isOpen = false;
  }
}
