import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-bebida',
  templateUrl: './form-bebida.component.html',
  styleUrls: ['./form-bebida.component.scss'],
})
export class FormBebidaComponent implements OnInit {

  @Input() produtoSelecionado!: string
  @Input() mensagem!: string
  @ViewChild('formBebida') private form!: NgForm;
  @Output() emitirBebida = new EventEmitter


  constructor() { }

  ngOnInit() { }

  enviarBebida() {
    const data = this.form.form.value;
    this.emitirBebida.emit(data)
    // this.metodo == 'put' ? this.atualizar() : this.adicionar(data)
  }

  // atualizar() {

  // }

  criarFormularoProduto: Produto[] = [
    // Bebidas
    {
      nome: 'Refrigerante',
      grupo_variacoes: [
        {
          tipo: 'Coca-cola',
          variacoes: [
            {
              nome: 'Coca cola sem açucar',
              descricao: 'sem açucar mesmo',
              valor: 5,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Fanta',
          variacoes: [
            {
              nome: 'Fanta Laranja',
              descricao: 'Tem gosto de laranja mesmo',
              valor: 4,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    },
    {
      nome: 'Suco',
      grupo_variacoes: [
        {
          tipo: 'Del vale',
          variacoes: [
            {
              nome: 'Laranja',
              descricao: 'sem açucar mesmo',
              valor: 5,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Suquito',
          variacoes: [
            {
              nome: 'Fanta Laranja',
              descricao: 'Tem gosto de laranja mesmo',
              valor: 4,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    },
    {
      nome: 'Cerveja',
      grupo_variacoes: [
        {
          tipo: 'Iscol',
          variacoes: [
            {
              nome: 'Sem alcool',
              descricao: 'sem açucar mesmo',
              valor: 5,
              imagem: '../../..',
            },
          ],
        },
        {
          tipo: 'Rainiquem',
          variacoes: [
            {
              nome: 'Não beba',
              descricao: 'Tem gosto de laranja mesmo',
              valor: 4,
              imagem: '../../../../../',
            },
          ],
        },
      ],
    },
  ];

  produtoSelecionadoSelect(e: any) {

  }

  grupoVariacaoSelecionada(e: any) {

  }

}
