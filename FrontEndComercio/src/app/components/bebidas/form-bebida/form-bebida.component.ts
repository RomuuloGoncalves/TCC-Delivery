import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/core/interfaces/produto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-bebida',
  templateUrl: './form-bebida.component.html',
  styleUrls: ['./form-bebida.component.scss'],
})
export class FormBebidaComponent implements OnInit {

  @Input() produtoSelecionado!: string
  @ViewChild('form') private form!: NgForm;
  @Input() metodo?: any

  constructor() { }

  ngOnInit() { }

  enviarProduto() {
    const data = this.form.form.value;
    console.log(data)
    this.metodo == 'put' ? this.atualizar() : this.adicionar(data)
  }

  atualizar() {

  }

  adicionar(data: any) {
  }

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
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
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
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
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
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
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
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
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
              valor_desconto: 5,
              valor_inicial: 10,
              valor_final: 5,
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
              valor_desconto: 2,
              valor_inicial: 6,
              valor_final: 4,
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
