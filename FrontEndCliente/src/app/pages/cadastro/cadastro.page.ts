import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private Cliente: ClienteService) { }

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  erros: Cliente = {
    'nome': ' ',
    'email': ' ',
    'telefone': ' ',
    'password': ' '
  };
  ngOnInit() {
  }

  public cadastrar() {
    const valores = this.cadastoForm.form.value;
    const cliente = {
      'nome': valores.nome,
      'email': valores.email,
      'password': valores.password,
      'telefone': valores.telefone,
    }

    this.Cliente.cadastro(cliente).subscribe(
      (response: any) => {
        if (response.tipo === 'erro') {
          this.erros = response.error.data;
          console.log(this.erros)
        } else {
          alert('cadastrado')
        }
      }, 

      (error) => {
        const valores = error.error.data;
        this.erros.nome = (valores.nome) ? valores.nome[0] : ' ';
        this.erros.email = (valores.email) ? valores.email[0] : ' ';
        this.erros.telefone = (valores.telefone) ? valores.telefone[0] : ' ';
        this.erros.password = (valores.password) ? valores.password[0] : ' ';
      }
    )
  }
}
