import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent  implements OnInit {

  constructor() { }

  @Input() public loading: boolean = false;
  @Input() public scale: number = 1;
  @Input() public color: string = 'primary';


  ngOnInit() {}

}
