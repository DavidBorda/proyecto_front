import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InventarioModel } from '../../core/models/inventario.model';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { crearProductoInterface } from '../../core/interface/info.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private httpCliente: HttpClient) {}

  getProductos() {
    return this.httpCliente
      .get<{ ok: boolean; productos: InventarioModel[] }>(
        `${base_url}/producto`
      )
      .pipe(map((respuesta) => respuesta.productos));
  }

  crearProductos(producto: crearProductoInterface) {
    return this.httpCliente.post(`${base_url}/producto`, producto);
  }
}
