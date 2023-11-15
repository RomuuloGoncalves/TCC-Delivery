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

  constructor(private GrupoVariacao: GrupoVariacaoService, private route: ActivatedRoute) { }

  id_produto!: number
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_produto = params['id'];
    });
    
    this.recuperarGrupoVariacoes()
  }

  isOpen: boolean = false;
  variacaoSelecionada!: any;


  grupoVariacoes!: GrupoVariacoes[]

  recuperarGrupoVariacoes(){
    this.GrupoVariacao.pegarGrupoVarProduto(this.id_produto).subscribe(
      (response) => {
        this.grupoVariacoes = response
        this.loading = false
        console.log(this.grupoVariacoes)
      },

      (badResponse: HttpErrorResponse) => {
        console.log(badResponse)
      }
    )
  }
  selecionarProduto(variacao: any) {
    this.variacaoSelecionada = variacao;
    this.isOpen = true;
  }

  loading: boolean = true
}
