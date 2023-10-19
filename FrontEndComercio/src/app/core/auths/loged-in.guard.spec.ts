import { TestBed } from '@angular/core/testing';

import { LogedInGuard } from './loged-in.guard';

describe('LogedInGuard', () => {
  canActivate(): Observable<boolean> {
    return this.Server.get('cliente').pipe(
      map(
        (response: any) => {
          if (!response.error) return true;

          this.handleError();
          return false;
        }),
        catchError((error: any) => {
          this.handleError();
          return of(false);
        })
    );
  }

  private handleError() {
    this.Toast.mostrarToast('erro', 'Para acessar o recurso, deve estar logado!')
    this.router.navigate(['/login']);
    this.Cookie.deleteAll();
  }
});
