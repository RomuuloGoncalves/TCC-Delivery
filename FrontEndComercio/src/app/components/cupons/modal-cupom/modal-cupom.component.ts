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


  constructor( private Cupom: CuponsService) { }

  ngOnInit() {}

  excluirCupom(id_cupom: number){
    this.Cupom.excluirCupom(id_cupom).subscribe(
      (response) => {
        console.log(response)
        window.location.reload()
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ehValido(status: any){
    return !!Number(status)
  }
}
