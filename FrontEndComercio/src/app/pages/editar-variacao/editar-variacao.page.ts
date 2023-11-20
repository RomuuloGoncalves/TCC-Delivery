import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastService } from 'src/app/core/controller/toast.service';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';
import { VariacaoService } from 'src/app/core/services/variacao.service';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-variacao',
  templateUrl: './editar-variacao.page.html',
  styleUrls: ['./editar-variacao.page.scss'],
})
export class EditarVariacaoPage implements OnInit {
  constructor(
    private variacaoService: VariacaoService,
    private route: ActivatedRoute,
    private Toast: ToastService,
    private router: Router,
    private location: Location
  ) {}

  @ViewChild('editarForm') private editarForm!: NgForm;

  loading: boolean = true;
  btnLoading: boolean = false;

  id_variacao: number = Number(this.route.snapshot.paramMap.get('id'));
  variacao!: Variacao;

  erros: any = {};

  ngOnInit() {
    this.variacaoService.pegarVariacao(this.id_variacao).subscribe(
      (response: Variacao) => {
        this.variacao = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  editar() {
    this.btnLoading = true;
    const dadosVariacao = this.editarForm.form.value;
    dadosVariacao.id = this.variacao.id;
    console.log(this.route.snapshot);
    this.variacaoService.editarVariacao(dadosVariacao).subscribe(
      (response) => {
        this.btnLoading = false;
        this.location.back();
        this.location.back();
        this.Toast.mostrarToast('sucesso', 'Variação atualizada com sucesso!');
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
}
