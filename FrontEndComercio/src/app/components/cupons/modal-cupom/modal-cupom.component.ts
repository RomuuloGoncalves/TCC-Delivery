import { Component, Input, OnInit } from '@angular/core';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';


@Component({
  selector: 'app-modal-cupom',
  templateUrl: './modal-cupom.component.html',
  styleUrls: ['./modal-cupom.component.scss'],
})
export class ModalCupomComponent  implements OnInit {

  @Input() public cupom?: Cupom;

  constructor( private Cupom: CuponsService) { }

  ngOnInit() {}

  excluirCupom(id_cupom:any){
    console.log(id_cupom)
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
}