import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaskService } from 'src/app/core/controller/mask.service';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Cep } from 'src/app/core/interfaces/cep';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { Endereco } from 'src/app/core/interfaces/endereco';
import { CepService } from 'src/app/core/services/cep.service';
import { EnderecoService } from 'src/app/core/services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent  implements OnInit{

  constructor(
    private Endereco: EnderecoService,
    public Mask: MaskService,
    private Toast: ToastService,
    private Cep: CepService
  ) { }

  @ViewChild('cadastrarForm') private cadastrarForm!: NgForm;

  @Input() public enderecos!: Endereco[];
  @Input() public cliente!: Cliente;


  ngOnInit() {
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

  public deletarEndereco(endereco: Endereco) {
    this.Endereco.excluir(endereco.id!).subscribe(
      (response: any) => {
        const id = this.enderecos.indexOf(endereco);
        this.enderecos.splice(id, 1);
      },
      (badResponde: HttpErrorResponse) => {
        console.log(badResponde);
      }
    );
  }

  public cadEndereco () {
    this.loadingCadEndereco = true;
    this.Endereco.cadastro(this.dados).subscribe(
      (response: Endereco) => {
        this.erros = {};
        const tipo = 'sucesso';
        const mensagem = 'Endereço cadastrado com sucesso!';
        this.enderecos.push(response);
        this.Toast.mostrarToast(tipo, mensagem);
        this.cadastrarForm.reset();
        this.limparDados();
        this.loadingCadEndereco = false;
      },
      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};
        for (const [chave, valor] of error) this.erros[chave] = valor;
      }
    )
  }

  public procurarCep(cep: string) {
    this.erros = {};
    this.Cep.infos(cep).subscribe(
      (response: Cep) => {
        if (response.erro) this.erros.cep = 'Cep inválido';
        else if (response.localidade !== 'Tatuí') this.erros.cep = 'Cep precisa ser de Tatuí';
        else {
          this.dados = {
            nome: this.dados.nome,
            cep: response.cep,
            rua: response.logradouro,
            bairro: response.bairro,
            numero: this.dados.numero,
            complemento: response.complemento
          };
        }
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
        const tipo = 'erro';
        const mensagem = badResponse.name;
        this.Toast.mostrarToast(tipo, mensagem);
      }
    )
  }

  public limparDados() {
    this.dados = {
      nome: '',
      cep: '',
      rua: '',
      bairro: '',
      numero: '',
      complemento: ''
    };
  }
}

