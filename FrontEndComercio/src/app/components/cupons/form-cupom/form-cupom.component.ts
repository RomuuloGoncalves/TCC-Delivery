import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-cupom',
  templateUrl: './form-cupom.component.html',
  styleUrls: ['./form-cupom.component.scss'],
})
export class FormCupomComponent  implements OnInit {

  @Input() cupom?: any
  @Input() metodo?: any
  @Input() acao?: any

  @Output() emitirCupom: any = new EventEmitter

  @ViewChild('form') private form!: NgForm;


  cupomEditado = "alegria" 

  constructor( private Cupom: CuponsService) { }

  ngOnInit() {
    console.log(this.cupom)
  }
  erros: any = {};
  loading: boolean = false;

  enviarCupom() {
    const data = this.form.form.value;
    console.log(data)
    this.metodo == 'put' ? this.atualizar() : this.adicionar(data)
  }

  atualizar(){
    
  }

  adicionar(data:any){
    data.porcentagem_desconto = Number(data.porcentagem_desconto).toFixed(2)
    this.Cupom.adicionarCupom(data).subscribe(
      (response: any) => {
        if (response.created_at) {
  
          const tipo = 'sucesso';
          const mensagem =  'Cadastro realizado com sucesso';
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
