import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient, private Cookie: CookieService) {}

  private url: string = 'https://cautious-meme-w6w999p5693gpgq-8000.app.github.dev';

  public post(path: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.Cookie.get('token')}`
    });

    return this.http.post(`${this.url}${path}`, JSON.stringify(data), { headers });
  }

  public get(path: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.Cookie.get('token')}`
    });

    return this.http.get(`${this.url}${path}`, { headers });
  }
}
