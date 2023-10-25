import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { Endereco } from 'src/app/core/interfaces/endereco';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { EnderecoService } from 'src/app/core/services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent  implements OnInit{

  constructor(private Endereco: EnderecoService, private Cliente: ClienteService) { }

  @ViewChild('cadastrarForm') private cadastrarForm!: NgForm;

  @Input() public enderecos!: Endereco[];
  @Input() public cliente!: Cliente;

  ngOnInit() {
    this.btnChange('list');
  }

  erros: any = {};
  displayAdd = 'listview';
  displayList = 'listview';
  dados = {
    nome: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    complemento: ''
  };

  public btnChange(tipo: string){
    if (tipo == 'add') {
      this.displayAdd='none';
      this.displayList='flex';
    } else {
      this.displayAdd='flex';
      this.displayList='none';
    }
  }
  listagem() {
    this.Endereco.listagem().subscribe(
      (response: Endereco[]) => {
        this.enderecos = response;
      },
      (badResponde: HttpErrorResponse) => {
        console.log(badResponde);
      }
    )
  }

  public deletarEndereco(id: any) {
    setTimeout(() => {
      this.Endereco.excluir(id).subscribe(
        (response: Endereco) => {
          console.log(response);
          this.listagem();
        },
        (badResponde: HttpErrorResponse) => {
          console.log(badResponde);
        }
      );
    }, 500)
  }

  public cadastrar() {
    console.log(this.dados);

    this.Endereco.cadastro(this.dados).subscribe(
      (response: Endereco) => {
        this.erros = {};
        console.log(response)
        this.Endereco.listagem().subscribe(
          (response: Endereco[]) => {
            this.enderecos = response;
            this.cadastrarForm.resetForm();
            this.btnChange('list');
          },
          (badResponde: HttpErrorResponse) => {
            console.log(badResponde);
          }
        )
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
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => { 
        if(data.erro) {
          this.erros["cep"] = 'O campo cep inválido';
        } else {
          if(data.localidade != 'Tatuí' || data.localidade == '') {
            this.erros["cep"] = 'O cep precisa ser de Tatuí';
          } else {
            this.dados = {
              nome: '',
              cep: cep,
              rua: data.logradouro,
              bairro: data.bairro,
              numero: '',
              complemento: data.complemento
            };
          }
        }
        console.log(this.dados);
      })
      .catch((_) => this.erros["cep"] = 'O campo cep inválido');
    }
}

