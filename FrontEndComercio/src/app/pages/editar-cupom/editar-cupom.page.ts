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
  idCupom!: Number;
  cupom!: Cupom;
  data!: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idCupom = params['id'];
    });
    console.log(this.idCupom)
    this.pegarCupom(Number(this.idCupom))
  }

  pegarCupom(idCupom: Number) {
    this.Cupom.pegarCupomID(idCupom).subscribe(
      (response) => {
        this.cupom = response
        this.data = this.cupom.data_validade.split(" ")[0].split("-")
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
