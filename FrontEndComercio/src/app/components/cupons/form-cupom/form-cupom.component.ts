import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/app/core/controller/toast.service';

@Component({
  selector: 'app-form-cupom',
  templateUrl: './form-cupom.component.html',
  styleUrls: ['./form-cupom.component.scss'],
})
export class FormCupomComponent implements OnInit {
  @Input() cupom?: Cupom;
  @Input() editar!: boolean;

  @Output() emitirCupom: EventEmitter<Cupom> = new EventEmitter();

  @ViewChild('formCupom') private formCupom!: NgForm;

  constructor(private Cupom: CuponsService, private Toast: ToastService) {}

  ngOnInit() {}

  erros: any = {};
  loading: boolean = false;
  loadingBtn: boolean = false;

  enviarCupom() {
    const data = this.formCupom.form.value;

    this.editar ? this.atualizar(data) : this.adicionar(data);
  }

  atualizar(cupom: Cupom) {
    this.loadingBtn = true;
    this.Cupom.editarCupom(cupom).subscribe(
      (response: any) => {
        console.log(response);
      },
      (badReponse: HttpErrorResponse) => {
        console.error(badReponse);
      }
    );
  }

  adicionar(cupom: Cupom) {
    this.loadingBtn = true;
    cupom.porcentagem_desconto = Number(cupom.porcentagem_desconto);
    this.Cupom.adicionarCupom(cupom).subscribe(
      (response: any) => {
        if (response.created_at) {
          this.formCupom.form.reset();
          const tipo = 'sucesso';
          const mensagem = 'Cadastro realizado com sucesso';

          this.Toast.mostrarToast(tipo, mensagem);
        }
        this.loadingBtn = false;
      },
      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;
        this.loading = false;
      }
    );
  }
}
