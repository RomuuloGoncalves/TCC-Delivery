import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/core/interfaces/produto';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-editar-bebida',
  templateUrl: './editar-bebida.page.html',
  styleUrls: ['./editar-bebida.page.scss'],
})
export class EditarBebidaPage implements OnInit {

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute) { }

  id_bebida!: Number
  // bebida!: Produto
  bebida!: Produto

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id_bebida = params['id_bebida'];
    });
    this.pegarBebida(Number(this.id_bebida))
    console.log(this.id_bebida)
  }

  pegarBebida(id: number) {
    this.produtoService.pegarprodutoID(id).subscribe(
      (response) => {
        this.bebida = response
      },
      (error) => {
        console.log("error: ", error)
      }
    )
  }

  editarBebida(e: Produto) {
    this.produtoService.editarProduto(e)
  }

}
