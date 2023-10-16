import { HttpErrorResponse } from '@angular/common/http';
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
  cuponsFiltrados!: Cupom[];

  loading: boolean = true;

  ngOnInit() {
    this.carregarPagina();
  }

  carregarPagina() {
    this.loading = true;
    this.Cupom.pegarCupons().subscribe(
      (response: Cupom[]) => {
        this.cupons = response;
        this.cuponsFiltrados = this.cupons;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  filtrarCupons(event: any) {
    const value: string = event.detail.value;
    if (value === 'valor')
      this.cuponsFiltrados = this.cupons.sort((a: Cupom, b: Cupom) => Number(a.porcentagem_desconto) - Number(b.porcentagem_desconto))
    else if (value === 'nome')
      this.cuponsFiltrados = this.cupons.sort((a: Cupom, b: Cupom) => a.nome.localeCompare(String(b.nome)))
    else if (value === 'quantidade')
      this.cuponsFiltrados = this.cupons.sort((a: Cupom, b: Cupom) => Number(a.quantidade) - Number(b.quantidade))
    else if (value === 'data')
      this.cuponsFiltrados =  this.cuponsFiltrados.sort((a: Cupom, b: Cupom) => Number(new Date(a.data_validade)) - Number(new Date(b.data_validade)))
  }
}
