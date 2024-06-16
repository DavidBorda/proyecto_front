import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpCliente: HttpClient) {}
  getUsuarios() {
    return this.httpCliente.get(`${base_url}/usuario`);
  }
}
