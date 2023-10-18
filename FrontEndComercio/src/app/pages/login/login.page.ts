import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Funcionario } from 'src/app/core/interfaces/funcionario';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('loginForm') private loginForm!: NgForm;

  constructor(
    private Funcionario: FuncionarioService,
    private router: Router,
    private Toast: ToastService,
    private Cookie: CookieService
  ) {}

  erros: any = {};
  loading: boolean = false;


  ngOnInit() {
  }

  login() {
    this.loading = true;
    const funcionario: Funcionario = this.loginForm.form.value;

    this.Funcionario.login(funcionario).subscribe(
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
          this.Toast.mostrarToast('sucesso', 'Login realizado com sucesso');
        }

        this.loading = false;
      },

      (badReponse: HttpErrorResponse) => {
        if (badReponse.status === 401) this.Toast.mostrarToast('erro', 'Credenciais erradas');

        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;

        console.log(this.erros);
        this.loading = false;
      }
    );
  }
}
