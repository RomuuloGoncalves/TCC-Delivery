import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-observacoes',
  templateUrl: './observacoes.component.html',
  styleUrls: ['./observacoes.component.scss'],
})
export class ObservacoesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public inputCounter: number = 0;
  public change: EventEmitter<any> = new EventEmitter();
}
