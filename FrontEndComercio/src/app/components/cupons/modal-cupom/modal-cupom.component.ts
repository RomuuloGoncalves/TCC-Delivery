import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';


@Component({
  selector: 'app-modal-cupom',
  templateUrl: './modal-cupom.component.html',
  styleUrls: ['./modal-cupom.component.scss'],
})
export class ModalCupomComponent  implements OnInit {

  @Input() public cupom!: Cupom;
  @Input() public isOpen: boolean = false;
  @Output() public fechar: EventEmitter<any> = new EventEmitter();
  @Output() public editar: EventEmitter<any> = new EventEmitter();
  @Output() public delete: EventEmitter<Cupom> = new EventEmitter();


  constructor( private Cupom: CuponsService) { }

  public alertDeletarCupom = false;

  public alertButtons = [
    {
      text: 'Não',
      role: 'cancel',
      handler: () => {
        this.alertDeletarCupom = false;
      }
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        this.excluirCupom();
      },
    },
  ];

  ngOnInit() {}

  excluirCupom(){
    this.Cupom.excluirCupom(this.cupom.id!).subscribe(
      () => {
        this.alertDeletarCupom = false;
        this.delete.emit();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ehValido(status: any) {
    return !!Number(status);
  }
}
