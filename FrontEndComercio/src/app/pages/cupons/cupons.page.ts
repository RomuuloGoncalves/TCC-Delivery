import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {
  constructor(private Cupom: CuponsService,) { }

  cupons!: Cupom[];
  loading: boolean = true;

  ngOnInit() {
    this.carregarPagina();
  }

  carregarPagina() {
    this.loading = true;
    this.Cupom.pegarCupons().subscribe(
      (response) => {
        this.cupons = response;
        this.ordenarCupons = this.cupons
        console.log(this.cupons);
        this.loading = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ordenarCupons!: any
  ordenar(option: any) {
    console.log(option.detail.value)
    console.log(this.cupons)
    if (option.detail.value == 'valor')
      this.cupons = this.ordenarCupons.sort((a: any, b: any) => a.valor_desconto - b.valor_desconto)
    if (option.detail.value == 'nome')
      this.cupons.sort((a, b) => a.nome.localeCompare(String(b.nome)))
    if (option.detail.value == 'quantidade')
      this.cupons = this.cupons.sort((a, b) => Number(a.quantidade) - Number(b.quantidade))
    if (option.detail.value == 'data')
      this.cupons = this.ordenarCupons.sort((a: any, b: any) => Number(new Date(a.data_validade)) - Number(new Date(b.data_validade)))
  }

  filtrar: { [chave: string]: boolean } = {
    "valido": true,
    "invalido": true,
  }

  selectedOptions: string[] = ["valido", "invalido"]

  filtrarCupons(e: any) {
    console.log(e.detail.value);
    console.log(this.filtrar[e.detail.value])
    for (const [chave, valor] of Object.entries(this.filtrar)) {
      this.filtrar[chave] = false
    }

    e.detail.value.forEach((chave: any) => {
      if (this.filtrar.hasOwnProperty(chave)) {
        this.filtrar[chave] = true; // Definir o valor booleano como true se a chave existir no objeto
      }
    });
  }

}
