import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastService } from 'src/app/core/controller/toast.service';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';
import { VariacaoService } from 'src/app/core/services/variacao.service';
import { Variacao } from 'src/app/core/interfaces/variacao'

@Component({
  selector: 'app-editar-variacao',
  templateUrl: './editar-variacao.page.html',
  styleUrls: ['./editar-variacao.page.scss'],
})
export class EditarVariacaoPage implements OnInit {

  constructor(private variacaoService: VariacaoService, private GrupoVar: GrupoVariacaoService, private route: ActivatedRoute, private Toast: ToastService, private router: Router) { }

  loading: boolean = true
  btnLoading: boolean = false

  id_variacao: number = Number(this.route.snapshot.paramMap.get('id'));
  variacao!: Variacao
  grupoVariacoes!: GrupoVariacoes[]

  erros: any = {}

  ngOnInit() {

    this.variacaoService.pegarProduto(this.id_variacao).subscribe(
      (response: Variacao) => {
        this.variacao = response
        console.log(response)
      },
      (error: any) => {
        console.log(error)
      }
    )

  }

  editar() {

  }

}
