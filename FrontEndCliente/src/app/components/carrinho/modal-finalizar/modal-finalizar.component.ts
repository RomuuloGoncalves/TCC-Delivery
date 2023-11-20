import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Endereco } from 'src/app/core/interfaces/endereco';
import { CarrinhoService } from 'src/app/core/services/carrinho.service';

@Component({
  selector: 'app-modal-finalizar',
  templateUrl: './modal-finalizar.component.html',
  styleUrls: ['./modal-finalizar.component.scss'],
})
export class ModalFinalizarComponent  implements OnInit {

  constructor(private router: Router, private Carrinho: CarrinhoService, private Toast: ToastService) { }

  @Input() public isOpen: boolean = false;
  @Input() public enderecos?: Endereco[];

  @Output() public fechar: EventEmitter<any> = new EventEmitter();

  enderecoSelecionado?: Endereco;
  formaPagamentoSelecionada?: string;

  loading: boolean = false;

  ngOnInit() {}

  fecharModal() {
    this.enderecoSelecionado = this.formaPagamentoSelecionada = undefined;
    this.fechar.emit();
    setTimeout(() => {
      this.router.navigate(['../perfil'])
    }, 150);
  }

  selecionarEndereco(e: any) {
    const id: number = e.detail.value;
    this.enderecoSelecionado = this.enderecos![id];
  }

  selecionarFormaPagamento(e: any) {
    const value: string = e.detail.value;
    this.formaPagamentoSelecionada = value;
  }

  finalizarCarrinho() {
    this.loading = true;
    this.Carrinho.finalizar(this.formaPagamentoSelecionada!, this.enderecoSelecionado?.id!).subscribe(
      (reponse: any) => {
        this.loading = false;
        this.fechar.emit();
        this.Toast.mostrarToast('sucesso', 'Carrinho finalizado com sucesso!');
        setTimeout(() => {
          location.reload();
        }, 200);
      },
      (badResponse: HttpErrorResponse) => {
        this.Toast.mostrarToast('erro', 'Algo deu errado!');
      }
    );
  }
}
