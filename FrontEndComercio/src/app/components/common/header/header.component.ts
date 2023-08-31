import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() { }
  @ViewChild('popover') popover:any

  menuType: string = 'overlay';
  // redirection(router:string){
  //   window.location.href=`./${router}`
  // }

  ngOnInit() { 
    this.isOpen = false
  }
  
  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
