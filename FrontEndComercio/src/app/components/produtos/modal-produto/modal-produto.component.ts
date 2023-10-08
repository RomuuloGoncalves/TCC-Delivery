import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
})
export class ModalProdutoComponent implements OnInit {
  @Input() public produto!: any;

  constructor() { }

  ngOnInit() { }

}
