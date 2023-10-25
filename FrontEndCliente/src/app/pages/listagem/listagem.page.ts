import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  constructor(private route: ActivatedRoute, private Router: Router, private categoriaService: CategoriaService) {}

  idProduto!: any;
  loading: boolean = true;
  categorias: Categoria[] = [];
  categoriasFiltradas: Categoria[] = [];

  ngOnInit() {
    if (!this.ehStringValida(this.idProduto)) this.Router.navigate(['..']);
    this.idProduto = this.route.snapshot.paramMap.get('produto');
    console.log(this.idProduto)
    this.carregarPagina();
  }

  private carregarPagina() {
    this.categoriaService.pegarCategoria(Number(this.idProduto)).subscribe(
      (response: Categoria[]) => {
        this.categorias = response;
        this.categoriasFiltradas = response;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    )
  }

  ehStringValida(str: string) {
    const regexString: RegExp = /^[A-Za-z]+$/;
    return regexString.test(str);
  }



}
