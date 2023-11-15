import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  @ViewChild('popover') popover: any

  constructor(private Categoria: CategoriaService,) { }

  ngOnInit() {
    this.recuperarCategorias()
  }

  public alertExcluirCateogria = false;

  public alertButtons = [
    {
      text: 'Não',
      role: 'cancel',
      handler: () => {
        this.alertExcluirCateogria = false;
      }
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        this.excluirCategoria();
      },
    },
  ];

  openPopover: boolean = false;
  isOpen: boolean = false;
  loading: boolean = true

  categorias!: Categoria[];
  categoriaSelecionada?: Categoria;

  recuperarCategorias() {
    this.Categoria.pegarCategorias().subscribe(
      (response) => {
        this.categorias = response
        this.loading = false
      },
      (error) => {
        console.error(error);
      }
    );
  }

  quantidaProduto(produtos: any){
    return produtos.length;
  }

  excluirCategoria() {
    this.Categoria.excluirCategoria(this.categoriaSelecionada?.id).subscribe(
      (response: any) => {
        const id = this.categorias.indexOf(this.categoriaSelecionada!);
        this.categorias.splice(id, 1);
        this.categoriaSelecionada = undefined;
        this.alertExcluirCateogria = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selecionarCategoria(categoria: Categoria) {
    this.categoriaSelecionada = categoria;
    this.alertExcluirCateogria = true;
  }
}
