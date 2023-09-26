import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private Cliente: ClienteService) { }

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

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
        console.log(response);
      }, 

      (error) => {
        console.error(error);
      }
    )
  }
}
