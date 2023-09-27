import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private Cliente: ClienteService) { }

  @ViewChild('loginForm') private loginForm!: NgForm;

  erros: Cliente = {
    'email': ' ',
    'password': ' '
  };
  ngOnInit() {
  }

  public login() {
    const valores = this.loginForm.form.value;
    const cliente = {
      'email': valores.email,
      'password': valores.password,
    }

    this.Cliente.login(cliente).subscribe(
      (response: any) => {
        if (response.tipo === 'erro') {
          this.erros = response.error.data;
        } else {
          console.log(response)
        }
      },

      (error) => {
        const valores = error.error.data;
        this.erros.email = (valores.email) ? valores.email[0] : ' ';
        this.erros.password = (valores.password) ? valores.password[0] : ' ';
      }
    )
  }
}
