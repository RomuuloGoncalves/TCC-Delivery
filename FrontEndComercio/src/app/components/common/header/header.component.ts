import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/controller/toast.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private Funcionario: FuncionarioService, private Toast: ToastService, private router: Router) { }
  @ViewChild('popover') popover:any

  menuType: string = 'overlay';

  ngOnInit() {
  }

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  logout() {
    this.Funcionario.limparToken();
    this.Toast.mostrarToast('sucesso', 'Logout realizado com sucesso!');
    this.router.navigate(['login']);
  }
}
