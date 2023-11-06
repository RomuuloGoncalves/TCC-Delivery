import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {
  constructor(private Cupom: CuponsService, private router: Router) { }

  cupons!: Cupom[];
  cuponsFiltrados!: Cupom[];
  cupomSelecionado?: Cupom;

  loading: boolean = true;
  isModalCupomOpen: boolean = false;

  selectedOptionOrdenar: string = 'nome';
  selectedOptionFiltragem: string = 'todos';

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

  ordenarCupons() {
    this.filtrarCupons();

    if (this.selectedOptionOrdenar === 'valor')
      this.cuponsFiltrados = this.cuponsFiltrados.sort((a: Cupom, b: Cupom) => Number(a.porcentagem_desconto) - Number(b.porcentagem_desconto));
    else if (this.selectedOptionOrdenar === 'nome')
      this.cuponsFiltrados = this.cuponsFiltrados.sort((a: Cupom, b: Cupom) => a.nome.localeCompare(String(b.nome)));
    else if (this.selectedOptionOrdenar === 'quantidade')
      this.cuponsFiltrados = this.cuponsFiltrados.sort((a: Cupom, b: Cupom) => Number(a.quantidade) - Number(b.quantidade));
    else if (this.selectedOptionOrdenar === 'data')
      this.cuponsFiltrados =  this.cuponsFiltrados.sort((a: Cupom, b: Cupom) => Number(new Date(a.data_validade)) - Number(new Date(b.data_validade)));
  }

  filtrarCupons() {
    if (this.selectedOptionFiltragem === 'todos')
      this.cuponsFiltrados = this.cupons;
    else if (this.selectedOptionFiltragem === 'valido')
      this.cuponsFiltrados = this.cupons.filter((cupom: Cupom) => !!Number(cupom.status));
    else if (this.selectedOptionFiltragem === 'invalido')
      this.cuponsFiltrados = this.cupons.filter((cupom: Cupom) => !Number(cupom.status));
    console.log(this.selectedOptionFiltragem);
  }

  abrirModalCupom(cupom: Cupom) {
    this.cupomSelecionado = cupom;
    this.isModalCupomOpen = true;
  }

  fecharModalCupom() {
    this.cupomSelecionado = undefined;
    this.isModalCupomOpen = false;
  }

  editarCupom() {
    this.isModalCupomOpen = false;
    setTimeout(() => {
      this.router.navigate(['/editar-cupom', this.cupomSelecionado?.id]);
    }, 100);
  }

  deleteCupom() {
    const idCupom = this.cupons.indexOf(this.cupomSelecionado!);
    this.cupons.splice(idCupom, 1);
    this.filtrarCupons();
    this.fecharModalCupom();
  }
}
