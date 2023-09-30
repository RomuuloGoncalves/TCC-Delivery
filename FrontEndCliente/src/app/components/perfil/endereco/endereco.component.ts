import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent  implements OnInit {

  constructor() { }

  @ViewChild('cadastrarForm') private cadastrarForm!: NgForm;

  ngOnInit() {}

  public cadastrar() {

  }

}
