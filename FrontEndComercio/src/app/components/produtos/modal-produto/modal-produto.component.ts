import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/core/interfaces/produto';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
})
export class ModalProdutoComponent implements OnInit, OnDestroy {

  @Input() public produto!: Produto;
  @Input() public isOpen: boolean = false;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();
  @Output() public editar: EventEmitter<any> = new EventEmitter();


  constructor(private Produto: ProdutosService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.isOpen = false
  }

  navigate(rota: string) {
    this.fechar.emit();
    setTimeout(() => {
      this.router.navigate([rota, this.produto.id])
    }, 100);
  }

  excluirProduto(id: any) {
    this.Produto.excluirProduto(id).subscribe(
      (response) => {
        console.log(response);
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
