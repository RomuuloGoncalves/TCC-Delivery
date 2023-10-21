import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from 'src/app/core/interfaces/endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent  implements OnInit {

  @ViewChild('cadastrarForm') private cadastrarForm!: NgForm;

  constructor() { }

  @Input() public enderecos!: Endereco[];

  ngOnInit() {
  }

  public cadastrar() {

  }
}
