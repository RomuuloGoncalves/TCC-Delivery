import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-cupons',
  templateUrl: './criacao-cupons.page.html',
  styleUrls: ['./criacao-cupons.page.scss'],
})
export class CriacaoCuponsPage implements OnInit {

  constructor() { }

  cupom = undefined

  ngOnInit() {
  }


  console(e: any) {
    console.log(e)
    alert("felicidade")
  }

}
