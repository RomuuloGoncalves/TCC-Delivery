import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ServerService } from '../services/server.service';
import { ToastService } from '../controller/toast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LogedInGuard implements CanActivate {
  constructor(
    private Server: ServerService,
    private router: Router,
    private Cookie: CookieService,
    private Toast: ToastService
  ) {}

  canActivate(): Observable<boolean> {
    return this.Server.get('/cliente').pipe(
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
    this.Toast.mostrarToast('erro', 'Para acessar o recurso, deve estar logado!')
    this.router.navigate(['login']);
    this.Cookie.delete('token');
  }
}
