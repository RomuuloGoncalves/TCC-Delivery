import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@capacitor/core';
import { MaskService } from 'src/app/core/controller/mask.service';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private Cliente: ClienteService,
    private Toast: ToastService,
    private router: Router,
    public Mask: MaskService,
  ) { }

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  erros: any = {};
  loading: boolean = false;

  ngOnInit() {
  }

  public cadastrar() {
    this.loading = true;
    const cliente = this.cadastoForm.form.value;
    this.Cliente.cadastro(cliente).subscribe(
      (response: any) => {
        this.erros = {};
        if (response.created_at) {
          this.cadastoForm.reset();
          this.router.navigate(['/login']);

          const tipo = 'sucesso';
          const mensagem =  'Cadastro realizado com sucesso';
          this.Toast.mostrarToast(tipo, mensagem);
        }
        this.loading = false;
      },

      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;
        this.loading = false;
      }
    )
  }
}
