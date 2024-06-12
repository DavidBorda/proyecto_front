import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InventarioModel } from '../../core/models/inventario.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private httpCliente: HttpClient) {}
  getProductos() {
    return this.httpCliente
      .get<{ ok: boolean; productos: InventarioModel[] }>(
        'http://localhost:4000/api/v1/producto'
      )
      .pipe(map((respuesta) => respuesta.productos));
  }
}
