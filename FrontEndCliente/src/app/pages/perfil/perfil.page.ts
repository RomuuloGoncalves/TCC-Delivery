import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { Endereco } from 'src/app/core/interfaces/endereco';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { EnderecoService } from 'src/app/core/services/endereco.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private Cliente: ClienteService, private Endereco: EnderecoService) { }

  loading: boolean = true;
  cliente!: Cliente;
  enderecos!: Endereco[];

  ngOnInit() {
    this.carregarPagina();
  }

  private carregarPagina() {
    this.Cliente.infos().subscribe(
      (response: Cliente) => {
        this.cliente = response;
        console.log(response);

        this.Endereco.listagem().subscribe(
          (response: Endereco[]) => {
            this.enderecos = response;
            this.loading = false;
          },
          (badResponde: HttpErrorResponse) => {
            console.log(badResponde);
            this.loading = false;
          }
        );
      },
      (badResponde: HttpErrorResponse) => {
        console.log(badResponde);
        this.loading = false;
      }
    );
  }



}
