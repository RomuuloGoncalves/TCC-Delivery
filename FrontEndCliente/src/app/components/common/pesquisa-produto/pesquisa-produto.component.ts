import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { Produto } from 'src/app/core/interfaces/produto';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.scss'],
})
export class PesquisaProdutoComponent  implements OnInit {

  @Input() categorias!: Categoria[];

  @Output() filtragem: EventEmitter<Categoria[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  filtrarProdutos(event: any) {
    const pesquisa: string = event.detail.value.toLowerCase().trim();

    // Clone de categorias vindo via parmetros
    const categorias = JSON.parse(JSON.stringify(this.categorias));

    const categoriasFiltradas: Categoria[] = categorias.filter((categoria: Categoria) => {
        categoria.produtos = categoria.produtos!.filter((produto: Produto) => produto.nome.indexOf(pesquisa) !== -1);
        return categoria.produtos.length;
      });
    this.filtragem.emit(categoriasFiltradas);
  }

}
