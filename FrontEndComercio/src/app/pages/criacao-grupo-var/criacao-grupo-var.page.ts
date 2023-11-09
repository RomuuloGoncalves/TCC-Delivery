import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';

@Component({
  selector: 'app-criacao-grupo-var',
  templateUrl: './criacao-grupo-var.page.html',
  styleUrls: ['./criacao-grupo-var.page.scss'],
})
export class CriacaoGrupoVarPage implements OnInit {
  constructor(private GrupoVar: GrupoVariacaoService, private route: ActivatedRoute, private Toast: ToastService, private router: Router,) { }
 
  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  cod_produto!: any

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cod_produto = params['id'];
    });
  }

  isOpen = false
  erros: any = {};

  tipo!:string
  mensagem!:string

  public cadastrar() {
    const grupoVar = this.cadastoForm.form.value;
    grupoVar.cod_produto = Number(this.cod_produto)
    console.log(grupoVar)

    this.GrupoVar.cadastrarGrupoVar(grupoVar).subscribe(
      (response: any) => {
        console.log(response)
        this.erros = {};
        if (response.id) {
          this.cadastoForm.reset();
          this.router.navigate(['/criacao-variacoes', this.cod_produto]);

          this.tipo = 'sucesso';
          this.mensagem = 'Cadastro realizado com sucesso';
          this.Toast.mostrarToast(this.tipo, this.mensagem);

          this.mensagem = 'Adicione as Variações';
          this.Toast.mostrarToast(this.tipo, this.mensagem);
        }
      },

      (badReponse: HttpErrorResponse) => {

      }
    )
  }
}
