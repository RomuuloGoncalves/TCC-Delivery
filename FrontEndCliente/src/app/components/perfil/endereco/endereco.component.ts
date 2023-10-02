import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Endereco } from 'src/app/core/interfaces/endereco';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { EnderecoService } from 'src/app/core/services/endereco.service';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent  implements OnInit {

  constructor(private Endereco: EnderecoService, private route: ActivatedRoute) { }
  id_endereco!: any
  cod_cliente!: any

  @ViewChild('cadastrarForm') private cadastrarForm!: NgForm;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cod_cliente = params['cod_cliente'];
    });

    this.listar(Number(this.cod_cliente))
    console.log(this.cod_cliente)
  }
  public listar(cod_cliente: any) {
    this.Endereco.listagem(cod_cliente).subscribe(
      (response) => {
        console.log(response)
        this.cod_cliente = response
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public cadastrar() {
  
  }



}
