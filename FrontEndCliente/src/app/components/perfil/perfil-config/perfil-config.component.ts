import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/core/interfaces/cliente';

@Component({
  selector: 'app-perfil-config',
  templateUrl: './perfil-config.component.html',
  styleUrls: ['./perfil-config.component.scss'],
})
export class PerfilConfigComponent  implements OnInit {

  @ViewChild('editarForm') private editarForm!: NgForm;

  @Input() public cliente!: Cliente;

  constructor() { }

  ngOnInit() {}

}
