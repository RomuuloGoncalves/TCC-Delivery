import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.scss'],
})
export class OpcoesComponent  implements OnInit {

  constructor() { }

  @Input() titulo!: string;
  @Input() icone!: string;
  @Input() pagina!: string[];


  ngOnInit() {}

}
