import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';

@Component({
  selector: 'app-accordion-grupo-var',
  templateUrl: './accordion-grupo-var.component.html',
  styleUrls: ['./accordion-grupo-var.component.scss'],
})
export class AccordionGrupoVarComponent  implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() variacoes?: Variacao[];
  @Input() tituloSessao?: string;
  @Output() clickCard: EventEmitter<Variacao> = new EventEmitter();

}
