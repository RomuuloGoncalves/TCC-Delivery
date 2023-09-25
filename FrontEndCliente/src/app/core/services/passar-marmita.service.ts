import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class PassarMarmitaService {

  constructor() { }

  private marmitaPassada?: Produto

  definirMarmita(marmita: Produto) {
    this.marmitaPassada = marmita
  }

  resgatarMarmita() {
    return this.marmitaPassada
  }

}
