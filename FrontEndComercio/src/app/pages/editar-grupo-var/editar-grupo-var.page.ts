import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/controller/toast.service';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';

@Component({
  selector: 'app-editar-grupo-var',
  templateUrl: './editar-grupo-var.page.html',
  styleUrls: ['./editar-grupo-var.page.scss'],
})
export class EditarGrupoVarPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private Toast: ToastService,
    private location: Location,
    private grupoVaricoesService: GrupoVariacaoService
  ) {}

  @ViewChild('editarForm') private editarForm!: NgForm;

  id_grup_var: number = Number(this.route.snapshot.paramMap.get('id'));
  grupoVariacao!: GrupoVariacoes

  ngOnInit() {
    this.grupoVaricoesService.pegarGrupoVariacao(this.id_grup_var).subscribe(
      (response) => {
        this.grupoVariacao = response
        this.isLoading = false
        console.log(response)
        console.log(this.grupoVariacao.quantidade_variacoes_min)
        console.log(this.grupoVariacao.quantidade_variacoes_max)
      },
      (error: HttpErrorResponse) => {
        console.error(error)
      }
    )
  }

  isLoading: boolean = true;
  btnLoading: boolean = false;

  erros: any = {};

  editar() {
    this.btnLoading = true;
    const dadosVariacao = this.editarForm.form.value;
    dadosVariacao.id = this.grupoVariacao.id
    dadosVariacao.cod_produto = this.grupoVariacao.cod_produto
    this.grupoVaricoesService.editarGrupoVar(dadosVariacao).subscribe(
      (response) => {
        this.btnLoading = false;
        this.location.back();
        this.Toast.mostrarToast('sucesso', 'Variação atualizada com sucesso!');
      },
      (badResponse: HttpErrorResponse) => {
        const error = Object.entries(badResponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;

        this.btnLoading = false;
      }
    )
    console.log(dadosVariacao)
  }
}
