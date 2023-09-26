import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  formularioLogin(e: any){
    let dadosLogin

    this.clienteService.cadastro(dadosLogin)
  }

}
