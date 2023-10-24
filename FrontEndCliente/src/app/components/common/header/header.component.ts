import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/core/controller/toast.service';
import { Cliente } from 'src/app/core/interfaces/cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('popover') popover: any

  constructor(private Cliente: ClienteService, private Toast: ToastService) {}

  logedIn: Boolean = this.Cliente.logedIn;

  ngOnInit() {
  }

  logout() {
    this.Cliente.logout().subscribe(
      (response: any) => {
        this.Cliente.limparToken();
        this.Toast.mostrarToast('sucesso', response.message);

        setTimeout(() => {
          location.reload();
        }, 250);
      },
      (badResponse: HttpErrorResponse) => {
        console.error(badResponse);
      }
    )
  }

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
