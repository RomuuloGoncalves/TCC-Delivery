import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-criacao-categoria',
  templateUrl: './criacao-categoria.page.html',
  styleUrls: ['./criacao-categoria.page.scss'],
})
export class CriacaoCategoriaPage implements OnInit {

  constructor(private Categoria: CategoriaService, private Toast: ToastService, private router: Router) { }
  @ViewChild('cadastroProduto') private cadastoForm!: NgForm;

  ngOnInit() {
  }

  erros: any = {};
  categorias: Categoria[] = []

  tipo!: string
  mensagem!: string

  public cadastrarProduto() {
    const produto = this.cadastoForm.form.value;

    this.Categoria.cadastrarCategoria(produto).subscribe(
      (response: any) => {
        console.log(response)
        this.erros = {};

        if (response.id) {
          this.cadastoForm.reset();

          this.tipo = 'sucesso';
          this.mensagem = 'Categoria cadastrada';
          this.Toast.mostrarToast(this.tipo, this.mensagem);
        }
      },

      (badReponse: HttpErrorResponse) => {

      }
    )
  }
}
