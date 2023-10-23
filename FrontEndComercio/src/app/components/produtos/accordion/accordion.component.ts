import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input() produtos?: Produto[];
  @Input() tituloSessao?: string;
  @Output() clickCard: EventEmitter<Produto> = new EventEmitter();
}
