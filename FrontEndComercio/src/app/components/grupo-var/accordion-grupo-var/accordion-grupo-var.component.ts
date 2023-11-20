import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';

@Component({
  selector: 'app-accordion-grupo-var',
  templateUrl: './accordion-grupo-var.component.html',
  styleUrls: ['./accordion-grupo-var.component.scss'],
})
export class AccordionGrupoVarComponent  implements OnInit {

  constructor(private router: Router, private grupoVariacaoService: GrupoVariacaoService) { }

  ngOnInit() { }

  @Input() variacoes?: Variacao[];
  @Input() grupoVariacao!: GrupoVariacoes;
  @Output() clickCard: EventEmitter<Variacao> = new EventEmitter();

  navigate(rota: string) {
    setTimeout(() => {
      this.router.navigate([rota, this.grupoVariacao.id])
    }, 100);
  }

  excluir() {
    this.grupoVariacao.id ? (
    this.grupoVariacaoService.excluirGrupVar(this.grupoVariacao.id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    )
    ) : null
  }

}
