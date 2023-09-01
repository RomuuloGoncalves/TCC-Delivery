import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atalho-home',
  templateUrl: './atalho-home.component.html',
  styleUrls: ['./atalho-home.component.scss'],
})
export class AtalhoHomeComponent implements OnInit {

  constructor() { }

  @Input() nomeAtalho?: string;
  @Input() iconeAtalho?: string;

  ngOnInit() { }

}
