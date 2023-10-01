import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpResponse } from '@capacitor/core';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private Funcionario: FuncionarioService, ) { }

  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  erros: any = {};
  ngOnInit() {
  }

  public cadastrar() {
    const funcionario = this.cadastoForm.form.value;
    console.log(funcionario)
    this.Funcionario.cadastro(funcionario).subscribe(
      (response: any) => {
        this.erros = {};
        if (response.created_at) {
          const tipo = 'sucesso';
          const mensagem =  'Cadastro realizado com sucesso';
          // this.Toast.mostrarToast(tipo, mensagem);
        }
      }, 

      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) {
          this.erros[chave] = valor; 
        }
      }
    )
  }
}
