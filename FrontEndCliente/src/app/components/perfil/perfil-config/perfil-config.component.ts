import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-perfil-config',
  templateUrl: './perfil-config.component.html',
  styleUrls: ['./perfil-config.component.scss'],
})
export class PerfilConfigComponent  implements OnInit {

  @ViewChild('editarForm') private editarForm!: NgForm;

  @Input() public cliente!: any;

  constructor(private Cliente: ClienteService) { }

  ngOnInit() {
    // this.btnChange('edit');
    console.log(this.cliente);
  }

  erros: any = {};
  displayInfo = 'listview';
  displayEdit = 'listview';

  dados = {
    nome: '',
    email: '',
    telefone: '',
  };

  // public btnChange(tipo: string){
  //   if (tipo == 'edit') {
  //     this.displayInfo='none';
  //     this.displayEdit='flex';
  //   } else {
  //     this.displayInfo='flex';
  //     this.displayEdit='none';
  //   }
  // }

  public editar() {
    const cliente = this.dados;
    console.log(cliente);
    const data = {
      id: this.cliente.id,
      nome: this.dados.nome,
      email: this.dados.email,
      telefone: this.dados.telefone,
    }

    this.Cliente.editar(data).subscribe(
      (response: Cliente) => {
        this.erros = {};
        console.log(response)
        this.Cliente.infos().subscribe(
          (response: Cliente) => {
            this.cliente = response;
            this.editarForm.resetForm();
            window.location.reload();
          },
          (badResponde: HttpErrorResponse) => {
            console.log(badResponde);
          }
        )
      },
      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};
        for (const [chave, valor] of error) this.erros[chave] = valor;
      }
    )
  }
}
