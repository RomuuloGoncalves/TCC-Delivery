import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('loginForm') private loginForm!: NgForm;

  erros: any = {};
  loading: boolean = false;


  ngOnInit() {
  }

  login(){}
}
