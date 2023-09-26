import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient, private Cookie: CookieService) {}

  private url: string = 'http://localhost/BoituLab/System/';

  public post(path: string, data: any): Observable<any> {
    const token = this.Cookie.get('token');
    if (token !== '') {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post(this.url, JSON.stringify(data), { headers });
    }
    return this.http.post(this.url, JSON.stringify(data));
  }
}