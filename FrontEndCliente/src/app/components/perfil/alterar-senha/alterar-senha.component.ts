import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/core/controller/toast.service';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { Cliente } from 'src/app/core/interfaces/cliente';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss'],
})

export class AlterarSenhaComponent implements OnInit {
  @ViewChild('alterarSenhaForm') private alterarSenhaForm!: NgForm;

  @Input() public isOpen: boolean = false;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();

  constructor(private Cliente: ClienteService, private Toast: ToastService) {}

  ngOnInit() {
    this.erros = {};
  }

  fecharModal() {
    this.resetForm();
    this.fechar.emit();
  }

  erros: any = {};

  loadingCadAlterarSenha: boolean = false;
  alertMudarSenha: boolean = false;

  public alertButtons = [
    {
      text: 'Não',
      role: 'cancel',
      handler: () => {
        this.alertMudarSenha = false;
      }
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        this.mudarSenha();
      },
    },
  ];

  public clickMudarSenha() {
    this.alertMudarSenha = true;
  }

  public mudarSenha() {
    this.loadingCadAlterarSenha = true
    this.alertMudarSenha = false;
    const dados = this.alterarSenhaForm.form.value
    this.Cliente.alterarSenha(dados).subscribe(
      (response: Cliente) => {
        this.erros = {};
        this.Toast.mostrarToast('sucesso', 'Senha Alterada com sucesso!');
        this.loadingCadAlterarSenha = false;
        this.fecharModal()
      },
      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};
        for (const [chave, valor] of error) this.erros[chave] = valor;
        console.log(this.erros)
        this.loadingCadAlterarSenha = false
      }
    )
  }

  public resetForm() {
    this.erros = {};
    this.alterarSenhaForm.form.controls['password'].setValue('');
    this.alterarSenhaForm.form.controls['novaSenha'].setValue('');
    this.alterarSenhaForm.form.controls['confirmarNovaSenha'].setValue('');
  }
}
