import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private Cliente: ClienteService, private Toast: ToastService, private router: Router, private Cookie: CookieService) { }

  @ViewChild('loginForm') private loginForm!: NgForm;

  erros: any = {};
  loading: boolean = false;

  ngOnInit() {
  }

  public login() {
    this.loading = true;
    const cliente = this.loginForm.form.value;

    this.Cliente.login(cliente).subscribe(
      (response: any) => {
        this.erros = {};
        if (response.token) {
          const dataExpCookie = new Date();
          dataExpCookie.setDate(dataExpCookie.getDate() + 15);
          this.Cookie.set('token', response.token, {
            expires: dataExpCookie,
          });

          this.loginForm.reset();
          this.router.navigate(['/']);

          const tipo = 'sucesso';
          const mensagem =  'Login realizado com sucesso';
          this.Toast.mostrarToast(tipo, mensagem);
          
        }
        this.loading = false;
      },

      (badReponse: HttpErrorResponse) => {
        if (badReponse.status === 401) {
          const tipo = 'erro';
          const mensagem =  'Credenciais erradas';
          this.Toast.mostrarToast(tipo, mensagem);
        }
        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor; 
        this.loading = false;
      }
    )
  }
}
