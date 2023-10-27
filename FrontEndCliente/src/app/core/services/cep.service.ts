import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private Server: ServerService) { }

  private readonly url = `https://viacep.com.br/ws`;

  public infos(cep: string, formato: string = 'json') {
    return this.Server.get(`/${cep}/${formato}`, this.url);
  }
}
