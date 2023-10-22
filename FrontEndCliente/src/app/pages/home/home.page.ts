import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(private Categoria: CategoriaService) { }

  loading: boolean = false;

  categorias: Categoria[] = [];
  categoriasFiltradas: Categoria[] = [];

  breakpoints = {
    975: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    976: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  ngOnInit() {
    this.carregarPagina();
  }

  private carregarPagina() {
    this.Categoria.listagem().subscribe(
      (response: Categoria[]) => {
        this.categorias = [...response];
        this.categoriasFiltradas = [...response];
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
