import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { ProdutosService } from 'src/app/core/services/produtos.service';
import { VariacaoService } from 'src/app/core/services/variacao.service';

@Component({
  selector: 'app-modal-variacao',
  templateUrl: './modal-variacao.component.html',
  styleUrls: ['./modal-variacao.component.scss'],
})
export class ModalVariacaoComponent  implements OnInit {

 
  @Input() public varicao!: Variacao;
  @Input() public isOpen: boolean = false;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();
  @Output() public editar: EventEmitter<any> = new EventEmitter();


  constructor(private Variacao: VariacaoService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.isOpen = false
  }

  navigate(rota: string) {
    this.fechar.emit();
    setTimeout(() => {
      this.router.navigate([rota, this.varicao.id])
    }, 100);
  }

  excluirProduto(id: any) {
    this.Variacao.cadastrarVariacao(id).subscribe(
      (response) => {
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }


  public alertButtons = [
    {
      text: 'Não',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        this.excluirProduto(this.produto.id)
      },
    },
  ];

}
