import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-criacao-produto',
  templateUrl: './criacao-produto.page.html',
  styleUrls: ['./criacao-produto.page.scss'],
})
export class CriacaoProdutoPage implements OnInit {

  constructor(private Produto: ProdutosService, private Categoria: CategoriaService) { }
  @ViewChild('cadastroProduto') private cadastoForm!: NgForm;

  ngOnInit() {
    this.pegarCategoria()
  }

  erros: any = {};
  categorias: Categoria[] = []
  pegarCategoria() {
    this.Categoria.pegarCategorias().subscribe(
      (response: Categoria[]) => {
        this.categorias = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  public cadastrarProduto() {
    const produto = this.cadastoForm.form.value;
    produto.cod_categoria = Number(produto.cod_categoria)
    console.log(produto)

    this.Produto.cadastrarProduto(produto).subscribe(
      (response: any) => {
        this.erros = {};
      },

      (badReponse: HttpErrorResponse) => {
      
      }
    )
  }
}
