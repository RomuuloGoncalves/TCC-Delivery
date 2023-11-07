import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';

@Component({
  selector: 'app-criacao-grupo-var',
  templateUrl: './criacao-grupo-var.page.html',
  styleUrls: ['./criacao-grupo-var.page.scss'],
})
export class CriacaoGrupoVarPage implements OnInit {
  constructor(private Categoria: CategoriaService, private GrupoVar: GrupoVariacaoService) { }
  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

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

  public cadastrar() {
    const grupoVar = this.cadastoForm.form.value;
    console.log(grupoVar)

    this.GrupoVar.cadastrarGrupoVar(grupoVar).subscribe(
      (response: any) => {
        this.erros = {};
        if (response.created_at) {
          this.cadastoForm.reset();
          const tipo = 'sucesso';
          const mensagem =  'Cadastro realizado com sucesso';
        }
      },

      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;
      }
    )
  }
}
