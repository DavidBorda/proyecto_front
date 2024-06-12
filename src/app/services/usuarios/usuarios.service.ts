import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpCliente: HttpClient) {}
  getUsuarios() {
    return this.httpCliente.get('http://localhost:4000/api/v1/usuario');
  }
}
