import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient, private Cookie: CookieService) {}

  private url: string = 'https://cautious-meme-w6w999p5693gpgq-8000.app.github.dev';

  public post(path: string, data: any | null, url: string = this.url): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.Cookie.get('token')}`
    });

    return this.http.post(`${url}${path}`, JSON.stringify(data), { headers });
  }

  public get(path: string, url: string = this.url): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.Cookie.get('token')}`
    });

    return this.http.get(`${url}${path}`, { headers });
  }

  public delete(path: string, url: string = this.url): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (!token) headers.set('Authorization', `Bearer ${token}`);


    return this.http.delete(`${this.url}${path}`, { headers });
  }

  public put(path: string, data: any, url: string = this.url): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (!token) headers.set('Authorization', `Bearer ${token}`);

    return this.http.put(`${url}${path}`, JSON.stringify(data), { headers });
  }
}
