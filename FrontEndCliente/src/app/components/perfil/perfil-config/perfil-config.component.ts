import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaskService } from 'src/app/core/controller/mask.service';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-perfil-config',
  templateUrl: './perfil-config.component.html',
  styleUrls: ['./perfil-config.component.scss'],
})
export class PerfilConfigComponent implements OnInit {
  @ViewChild('editarForm') private editarForm!: NgForm;

  @Input() public cliente!: Cliente;
  estaEditando: boolean = false;

  constructor(
    private Cliente: ClienteService,
    private Toast: ToastService,
    public Mask: MaskService
  ) {}

  ngOnInit() {}

  erros: any = {};
  loading: boolean = false;

  public editar() {
    this.loading = true;
    const cliente = this.editarForm.form.value;
    this.Cliente.editar(cliente).subscribe(
      (response: Cliente) => {
        this.erros = {};
        this.Toast.mostrarToast('sucesso', 'Perfil editado com sucesso!');
        this.cliente = response;
        this.resetForm();
        this.loading = false;
      },
      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};
        for (const [chave, valor] of error) this.erros[chave] = valor;
        this.loading = false;
      }
    );
  }

  public changeEditar(e: boolean) {
    if (!e) this.resetForm();
    this.estaEditando = e;
  }

  public resetForm() {
    this.erros = {};
    this.editarForm.form.controls['nome'].setValue(this.cliente.nome);
    this.editarForm.form.controls['telefone'].setValue(this.cliente.telefone);
    this.editarForm.form.controls['email'].setValue(this.cliente.email);
  }
}
