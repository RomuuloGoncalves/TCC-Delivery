import { Injectable } from '@angular/core';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Injectable({
  providedIn: 'root'
})
export class MaskService {

  constructor() { }

  readonly telefone: MaskitoOptions = {
    mask: [
      '+', '5', '5', ' ',
      ...Array(2).fill(/\d/),
      ' ',
      ...Array(5).fill(/\d/),
      '-',
      ...Array(4).fill(/\d/)
    ]
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
}
