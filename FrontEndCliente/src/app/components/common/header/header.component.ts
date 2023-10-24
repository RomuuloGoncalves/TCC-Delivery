import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('popover') popover: any

  constructor(private Cliente: ClienteService) {}

  cliente!: Cliente;

  ngOnInit() {
    this.carregarCliente();
  }

  private carregarCliente() {
    this.Cliente.infos().subscribe(
      (response: Cliente) => {
        this.cliente = response;
      },
      (badResponde: HttpErrorResponse) => {
        console.log(badResponde);
      }
    );
  }
  logedIn: Boolean = this.Cliente.logedIn;


  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
