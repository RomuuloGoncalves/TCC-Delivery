import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient, private Cookie: CookieService) {}

  // private url: string = 'https://cuddly-funicular-jpv6ggxg59xc5vvg-8000.app.github.dev';
  private url: string = 'http://127.0.0.1:8000';

  public post(path: string, data: any): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token !== '')
      headers.set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.url}${path}`, JSON.stringify(data), { headers });
  }

  public get(path: string): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    if (token !== '') {
      headers.set('Authorization', `Bearer ${token}`);
    }
  
    return this.http.get(`${this.url}${path}`, { headers });
  }

  public delete(path: string): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token !== '') {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.delete(`${this.url}${path}`, { headers });
  }

  public put(path: string, data: any): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token !== '')
      headers.set('Authorization', `Bearer ${token}`);

    return this.http.put(`${this.url}${path}`, JSON.stringify(data), { headers });
  }
  
}
