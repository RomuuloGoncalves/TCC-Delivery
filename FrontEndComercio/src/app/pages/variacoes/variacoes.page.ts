import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';

@Component({
  selector: 'app-variacoes',
  templateUrl: './variacoes.page.html',
  styleUrls: ['./variacoes.page.scss'],
})
export class VariacoesPage implements OnInit {

  constructor(private grupoVariacaoService: GrupoVariacaoService, private route: ActivatedRoute) { }

  gruposVarOrganizados!: GrupoVariacoes[];

  variacaoSelecionada!: Variacao
  filtrar: { [chave: string]: boolean } = {};
  selectedOptions: string[] = []

  filtrarSelecao(e: any) {
    for (const [chave, valor] of Object.entries(this.filtrar)) {
      this.filtrar[chave] = false
    }

    e.detail.value.forEach((chave: any) => {
      if (this.filtrar.hasOwnProperty(chave)) {
        this.filtrar[chave] = true;
      }
    });
  }

  selecionarProduto(variacao: Variacao) {
    this.variacaoSelecionada = variacao;
    this.isOpen = true;
  }



  grupoVariacoes!: GrupoVariacoes[]

  isOpen: boolean = false

  id_produto!: number

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id_produto = params['id'];
    });
    console.log(this.id_produto)

    this.grupoVariacaoService.pegarGrupoVarProduto(this.id_produto).subscribe(
      (response) => {
        console.log(response)
        this.grupoVariacoes = response
        this.loading = false
      },
      (badResponse: HttpErrorResponse) => {
        console.log(badResponse)
      }
    )

  }

  loading: boolean = true

  stringify(obj: any) {
    return JSON.stringify(obj)
  }

}
