import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { Produto } from 'src/app/core/interfaces/produto';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ProdutoService } from 'src/app/core/services/produto.service';

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

  constructor(private Cliente: ClienteService, private produtoService: ProdutoService, private categoriaService: CategoriaService) {}

  ngOnInit() {
    this.carregarProdutos();
    this.carregarCategorias();
  }

  private carregarCategorias() {
    // this.categoriaService.listagem().subscribe(
    //   (response) => {
    //     console.log("home", response)
    //     this.categorias = response
    //     console.log("categoria home", this.categorias)
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // )
  }

  private carregarProdutos() {
    this.produtoService.listagem().subscribe(
      (response) => {
        console.log("home", response)
        this.produto = response
        console.log("produto home", this.produto)
      },
      (error) => {
        console.error(error);
      }
    )
  }

  logedIn = !!this.Cliente.token;

  
  loading: boolean = false;
  
  categorias!: Categoria[];
  produto!: Produto[]

  produtos: Produto[] = [
    // {
      //   id_produto: 1,
      //   nome: 'Porções',
      //   variacoes: [
        //     {
          //       id_variacao: 1,
          //       nome: 'Batata Frita',
          //       valor_desconto: 15.0,
          //       valor_inicial: 19.5,
          //       valor_final: 33,
          //       descricao: 'Bata muito boa tipo muito muito boa mesmo',
          //     },
          //     {
            //       id_variacao: 1,
            //       nome: 'Mandioca Frita',
            //       valor_desconto: 15.0,
            //       valor_inicial: 19.5,
            //       valor_final: 33,
            //       descricao: 'Bata muito boa tipo muito muito boa mesmo',
            //     },
            //     {
              //       id_variacao: 1,
              //       nome: 'Frango Frita',
              //       valor_desconto: 15.0,
              //       valor_inicial: 19.5,
              //       valor_final: 33,
              //       descricao: 'Bata muito boa tipo muito muito boa mesmo',
              //     },
    //   ],
    // },
    // {
      //   id_produto: 1,
      //   nome: 'Doces',
      //   variacoes: [
        //     {
          //       id_variacao: 1,
          //       nome: 'Pudim',
          //       valor_desconto: 15.0,
          //       valor_inicial: 19.5,
          //       valor_final: 33,
          //       descricao: 'Bata muito boa tipo muito muito boa mesmo',
          //     },
          //     {
    //       id_variacao: 1,
    //       nome: 'Arroz Doce',
    //       valor_desconto: 15.0,
    //       valor_inicial: 19.5,
    //       valor_final: 33,
    //       descricao: 'Bata muito boa tipo muito muito boa mesmo',
    //     },
    //     {
      //       id_variacao: 1,
      //       nome: 'Angu',
      //       valor_desconto: 15.0,
      //       valor_inicial: 19.5,
      //       valor_final: 33,
      //       descricao: 'Bata muito boa tipo muito muito boa mesmo',
      //     },
      //   ],
      // },
      // {
        //   id_produto: 3,
        //   nome: 'Saladas',
        //   variacoes: [
          //     {
            //       id_variacao: 1,
            //       nome: 'Alface',
            //       descricao: 'Verdinho e maravilhoso!',
            //       valor_inicial: 5.0,
            //       valor_final: 3.0,
            //       selecionado: false
            //     },
            //     {
    //       id_variacao: 2,
    //       nome: 'Tomate',
    //       descricao: 'Vermelhinho e gostoso!',
    //       valor_inicial: 8.0,
    //       valor_final: 8.0,
    //       selecionado: false
    //     },
    //     {
      //       id_variacao: 3,
      //       nome: 'Rúcula',
      //       descricao: 'Verdona e gostosa!',
      //       valor_inicial: 6.0,
      //       valor_final: 6.0,
      //       selecionado: false
      //     },
      //   ],
      // }
    ];
    
    produtosFiltrados: Produto[] = [...this.produtos];
    
    filtrarPesquisa(event: any) {
      const pesquisa: string = event.detail.value.toLowerCase().trim();
      
    this.produtosFiltrados = [
      ...this.produtos.map((produto: Produto) => {
        const nProduto: Produto = {
          id_produto: produto.id_produto,
          nome: produto.nome,
          variacoes: [
            ...produto.variacoes!.filter((variacao: Variacao) => {
              const nomeVariacao: string = variacao.nome.toLowerCase().trim();
              return (
                nomeVariacao.startsWith(pesquisa) || nomeVariacao.endsWith(pesquisa)
                );
              }),
            ],
          };
          return nProduto;
        }),
      ];
      
      this.produtosFiltrados = [
        ...this.produtosFiltrados.filter((produto: Produto) => {
          return produto.variacoes?.length;
        }),
      ];
    }
    
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
  }
  