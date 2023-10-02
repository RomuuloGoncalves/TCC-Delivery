import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-loading',
  templateUrl: './btn-loading.component.html',
  styleUrls: ['./btn-loading.component.scss'],
})
export class BtnLoadingComponent  implements OnInit {

  constructor() { }

  @Input() public loading: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public btnNome!: string;
  @Input() public tipoBtn: string = 'submit';
  @Input() public color: string = 'primary';
  @Input() public colorLoading: string = 'light';
  @Input() public height: number = 60;

  ngOnInit() {}

}
