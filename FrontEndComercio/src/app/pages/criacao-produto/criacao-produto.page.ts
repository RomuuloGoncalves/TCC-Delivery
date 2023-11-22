import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-criacao-produto',
  templateUrl: './criacao-produto.page.html',
  styleUrls: ['./criacao-produto.page.scss'],
})
export class CriacaoProdutoPage implements OnInit {

  constructor(private Produto: ProdutosService, private Categoria: CategoriaService, private Toast: ToastService, private router: Router) { }
  @ViewChild('cadastroProduto') private cadastoForm!: NgForm;

  ngOnInit() {
    this.pegarCategoria()
  }

  erros: any = {};
  categorias: Categoria[] = [];

  tipo!: string;
  mensagem!: string;

  loading: boolean = false;

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

  arqsSelecionados: File[] = [];
  nomeArqSelecionado?: string
  selecionarArqs(event: any) {
    this.arqsSelecionados = event.target.files;

  }

  public cadastrarProduto() {
    const produto = this.cadastoForm.form.value;
    produto.cod_categoria = Number(produto.cod_categoria)
    produto.imagem = this.arqsSelecionados[0]

    this.erros = {};
    console.log(produto)
    this.Produto.cadastrarProduto(produto).subscribe(
      (response: any) => {

        if (response.id) {
          this.cadastoForm.reset();
          this.router.navigate(['/criacao-grupo-var', response.id]);
          this.Toast.mostrarToast('sucesso','Produto cadastrado com sucesso! Crie as variantes, caso tenha!');
        }
      },

      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;

        this.loading = false;
      }
    )
  }
}
