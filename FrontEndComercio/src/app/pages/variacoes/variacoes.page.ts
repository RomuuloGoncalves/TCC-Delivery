import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';

@Component({
  selector: 'app-variacoes',
  templateUrl: './variacoes.page.html',
  styleUrls: ['./variacoes.page.scss'],
})
export class VariacoesPage implements OnInit {

  constructor(private grupoVariacaoService: GrupoVariacaoService, private route: ActivatedRoute) { }

  grupoVariacoes!: GrupoVariacoes[]

  id_produto!: number

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id_produto = params['id'];
    });
    console.log(this.id_produto)

    this.grupoVariacaoService.pegarGrupoVarProduto(this.id_produto).subscribe(
      (response) => {
        console.log(response)
        this.grupoVariacaoService = response
        this.loading = false
      },
      (badResponse: HttpErrorResponse) => {
        console.log(badResponse)
      }
    )

  }

  loading: boolean = true

}
