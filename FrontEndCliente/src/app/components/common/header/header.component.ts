import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('popover') popover:any

  ngOnInit() { 
    this.isOpen = false
  }

  login: Boolean = true

  // redirection(router: string) {
  //   window.location.href = `./${router}`
  // }
  
  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
