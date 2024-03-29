import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MaskService } from 'src/app/core/controller/mask.service';
import { ToastService } from 'src/app/core/controller/toast.service';
import { ClienteService } from 'src/app/core/services/cliente.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private Cliente: ClienteService,
    private Toast: ToastService,
    private router: Router,
    private Cookie: CookieService,
  ) { }

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
          setTimeout(() => {
            location.reload();
          }, 200);
          this.Toast.mostrarToast('sucesso', 'Login realizado com sucesso');
        }

        this.loading = false;
      },

      (badReponse: HttpErrorResponse) => {
        if (badReponse.status === 401) this.Toast.mostrarToast('erro', 'Credenciais erradas');

        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;

        this.loading = false;
      }
    )
  }
}
