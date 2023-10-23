import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { ToastService } from '../controller/toast.service';
import { FuncionarioService } from '../services/funcionario.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(
    private router: Router,
    private Funcionario: FuncionarioService
  ) {}

  canActivate() {
    if (!this.Funcionario.logedIn) return true;

    this.router.navigate(['/home'])
    return false;
  }
}
