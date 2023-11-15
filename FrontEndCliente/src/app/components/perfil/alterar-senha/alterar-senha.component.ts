import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastService } from 'src/app/core/controller/toast.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss'],
})

export class AlterarSenhaComponent implements OnInit {
  @Input() public isOpen: boolean = false;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  fecharModal() {
    this.fechar.emit();
  }

  loadingCadEndereco: boolean = false;
  estaCadEndereco: boolean = false;

  erros: any = {};

  dados = {
    nome: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    complemento: ''
  };

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

  public clickDeletarEndereco() {
    this.alertMudarSenha = true;
  }

  public mudarSenha() {
    
  }
}
