import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(
    private router: Router,
    private Cliente: ClienteService
  ) {}

  canActivate() {
    if (!this.Cliente.logedIn) return true;

    this.router.navigate([''])
    return false;
  }
}
