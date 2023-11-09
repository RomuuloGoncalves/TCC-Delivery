import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';

@Component({
  selector: 'app-criacao-grupo-var',
  templateUrl: './criacao-grupo-var.page.html',
  styleUrls: ['./criacao-grupo-var.page.scss'],
})
export class CriacaoGrupoVarPage implements OnInit {
  constructor(private GrupoVar: GrupoVariacaoService, private route: ActivatedRoute) { }
  @ViewChild('cadastroForm') private cadastoForm!: NgForm;
  cod_produto!: any
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cod_produto = params['id'];
    });
  }

  isOpen = false
  erros: any = {};

  public cadastrar() {
    const grupoVar = this.cadastoForm.form.value;
    grupoVar.cod_produto = Number(this.cod_produto)
    console.log(grupoVar)

    this.GrupoVar.cadastrarGrupoVar(grupoVar).subscribe(
      (response: any) => {
        this.erros = {};
      },

      (badReponse: HttpErrorResponse) => {

      }
    )
  }
}
