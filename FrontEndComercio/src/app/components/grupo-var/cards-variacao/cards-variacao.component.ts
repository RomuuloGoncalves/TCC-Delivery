import { Component, Input, OnInit } from '@angular/core';
import { Variacao } from 'src/app/core/interfaces/variacao';
import { Router } from '@angular/router';
import { VariacaoService } from 'src/app/core/services/variacao.service';
@Component({
  selector: 'app-cards-variacao',
  templateUrl: './cards-variacao.component.html',
  styleUrls: ['./cards-variacao.component.scss'],
})
export class CardsVariacaoComponent  implements OnInit {

  constructor(private router: Router, private variacaoService: VariacaoService) { }

  @Input() variacao!: Variacao;

  ngOnInit() { }

  navigate(rota: string) {
    setTimeout(() => {
      this.router.navigate([rota, this.variacao.id])
    }, 100);
  }

  excluir() {
    console.log("excluir", this.variacao.id)
    this.variacaoService.excluirVariacao(this.variacao.id).subscribe(
      (response) => {
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
