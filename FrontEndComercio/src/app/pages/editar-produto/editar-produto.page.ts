import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { Produto } from 'src/app/core/interfaces/produto';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
export class EditarProdutoPage implements OnInit {
  constructor(private produtoService: ProdutosService, private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute, private Toast: ToastService) {}
  @ViewChild('cadastroProduto') private cadastroForm!: NgForm;

  isLoading: boolean = true;
  btnLoading: boolean = false;
  produto!: any;
  erros: any = {};

  produto_id: number = Number(this.route.snapshot.paramMap.get('id'));

  categorias!: Categoria[]

  ngOnInit() {

    this.categoriaService.pegarCategorias().subscribe(
      (response) => {
        this.categorias = response
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse)
      }
    )

    this.produtoService.pegarprodutoID(this.produto_id).subscribe(
      (response) => {
        this.produto = response;
        this.produto.imagem = ( response.imagem) ? this.produtoService.pegarImagem(this.produto.imagem) : '../../../assets/imgs/default/cards-produtos.png';
        this.produto.cod_categoria = this.produto.cod_categoria?.toString()
        this.isLoading = false;
      },
      (badResponse: HttpResponseBase) => {
        console.error(badResponse);
      }
    );

  }
  
  atualizarProduto() {
    this.btnLoading = true;

    let dadosProduto = this.cadastroForm.form.value;
    dadosProduto.id = this.produto.id
    dadosProduto.imagem = this.arqsSelecionados[0];
    dadosProduto.cod_categoria = Number(dadosProduto.cod_categoria);
    this.produtoService.editarProduto(dadosProduto).subscribe(
      (response) => {
        this.btnLoading = false;
        this.router.navigate(['/produtos']);
        this.Toast.mostrarToast('sucesso', 'Produto atualizado com sucesso!');
      },
      (badResponse: HttpErrorResponse) => {
        const error = Object.entries(badResponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;

        this.btnLoading = false;
      }
    );
  }

  arqsSelecionados: File[] = [];
  selecionarArqs(event: any) {
    this.arqsSelecionados = event.target.files;
  }
}
