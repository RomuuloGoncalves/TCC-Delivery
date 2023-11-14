import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/core/controller/toast.service';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';
import { GrupoVariacaoService } from 'src/app/core/services/grupo-variacao.service';
import { VariacaoService } from 'src/app/core/services/variacao.service';

@Component({
  selector: 'app-criacao-variacoes',
  templateUrl: './criacao-variacoes.page.html',
  styleUrls: ['./criacao-variacoes.page.scss'],
})
export class CriacaoVariacoesPage implements OnInit {

  constructor(private Variacao: VariacaoService, private GrupoVar: GrupoVariacaoService, private route: ActivatedRoute, private Toast: ToastService, private router: Router,) { }
  @ViewChild('cadastroForm') private cadastoForm!: NgForm;

  cod_produto!: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cod_produto = params['id'];
    });

    this.pegarGrupoVar();
  }

  variacoes!: GrupoVariacoes[];
  erros: any = {};

  loading: boolean = false;

  pegarGrupoVar() {
    this.GrupoVar.pegarGrupoVarProduto(this.cod_produto).subscribe(
      (response: GrupoVariacoes[]) => {
        this.variacoes = response;

        if (!this.variacoes.length) {
          this.router.navigate(['../../criacao-grupo-var', this.cod_produto]);
          this.Toast.mostrarToast('erro', 'Cadastre algum grupo variação!');
        }
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  public cadastrar() {
    const variacao = this.cadastoForm.form.value;
    variacao.cod_produto = Number(this.cod_produto)
    variacao.cod_grupo_variacoes = Number(variacao.cod_grupo_variacoes)
    variacao.valor = Number(variacao.valor.replace(",", "."))

    this.Variacao.cadastrarVariacao(variacao).subscribe(
      (response: any) => {
        this.erros = {};
        this.cadastoForm.reset();
        this.Toast.mostrarToast('sucesso', 'Variação criada, adicione mais se necessário');
      },

      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;

        this.loading = false;
      }
    )
  }
}
