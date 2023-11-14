import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProdutosPage } from '../produtos/produtos.page';

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

  openPopover: boolean = false;
  isOpen: boolean = false;
  loading: boolean = true

  categorias!: Categoria[]

  recuperarCategorias() {
    this.Categoria.pegarCategorias().subscribe(
      (response) => {
        this.categorias = response
        this.loading = false
        console.log(this.categorias)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  quantidaProduto(produtos: any){
    return produtos.length
  }

  excluirCategoria(id: any) {
    this.Categoria.excluirCategoria(id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  public alertButtons = [
    {
      text: 'Não',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        // this.excluirCategoria(id)
      },
    },
  ];

}
