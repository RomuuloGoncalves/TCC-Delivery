import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ServerService } from '../services/server.service';
import { ToastService } from '../controller/toast.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogedInGuard implements CanActivate {
  constructor(
    private Server: ServerService,
    private router: Router,
    private Cookie: CookieService,
    private Toast: ToastService
  ) {}

  canActivate(): Observable<boolean> {
    return this.Server.get('/funcionario').pipe(
      map(
        (response: any) => {
          if (!response.error) return true;

          this.handleError();
          return false;
        }),
        catchError((error: HttpErrorResponse) => {
          this.handleError();
          return of(false);
        })
    );
  }

  private handleError() {
    this.Cookie.delete('token');
    this.Toast.mostrarToast('erro', 'Para acessar o recurso, deve estar logado!')
    this.router.navigate(['login']);
  }
}
