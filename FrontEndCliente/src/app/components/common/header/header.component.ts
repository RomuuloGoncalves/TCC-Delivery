import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/core/services/cliente.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('popover') popover: any

  constructor(private Cliente: ClienteService) {}

  ngOnInit() {
  }


  logedIn: Boolean = this.Cliente.logedIn;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
