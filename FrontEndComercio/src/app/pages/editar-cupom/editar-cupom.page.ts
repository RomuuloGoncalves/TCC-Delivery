import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';

@Component({
  selector: 'app-editar-cupom',
  templateUrl: './editar-cupom.page.html',
  styleUrls: ['./editar-cupom.page.scss'],
})
export class EditarCupomPage implements OnInit {

  constructor( private Cupom: CuponsService, private route: ActivatedRoute) { }
  id_cupom!: any

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_cupom = params['id_cupom'];
    });
    console.log(this.id_cupom)
    this.pegarCupom(Number(this.id_cupom))
  }

  cupom!: Cupom

  pegarCupom(id_cupom: Number) {
    this.Cupom.pegarCupomID(id_cupom).subscribe(
      (response) => {
        console.log(response)
        this.cupom = response
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
