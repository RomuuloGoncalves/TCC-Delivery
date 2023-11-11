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
  categorias: Categoria[] = []

  tipo!: string
  mensagem!: string

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
    JSON.stringify(produto.imagem )
  
    console.log(produto.imagem)

    this.Produto.cadastrarProduto(produto).subscribe(
      (response: any) => {
        console.log(response)
        this.erros = {};

        if (response.id) {
          // this.cadastoForm.reset();
          // this.router.navigate(['/criacao-grupo-var', response.id]);

          this.tipo = 'sucesso';
          this.mensagem = 'Produto cadatrado, se necessário, crie as varientes';
          this.Toast.mostrarToast(this.tipo, this.mensagem);
        }
      },

      (badReponse: HttpErrorResponse) => {

      }
    )
  }
}
