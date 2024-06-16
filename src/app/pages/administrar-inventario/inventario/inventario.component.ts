import { ProductosService } from '../../../services/productos/productos.service';
import { UsuarioModel } from '../../../core/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Component, OnInit, inject } from '@angular/core';
import { InfoInterface } from '../../../core/interface/info.interface';
import { TablaComponent } from '../../../components/tabla/tabla.component';
import { InventarioModel } from '../../../core/models/inventario.model';
import { Router } from '@angular/router';
import { PATH } from '../../../core/enum/path.enum';

@Component({
  selector: 'app-inventario',
  standalone: true,
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css',
  imports: [TablaComponent],
})
export class InventarioComponent implements OnInit {
  inventario: InfoInterface[] = [];
  columnas: string[] = [];
  private ProductosService = inject(ProductosService);
  private router = inject(Router);

  ngOnInit(): void {
    this.ProductosService.getProductos().subscribe(
      (productos: InventarioModel[]) => {
        this.inventario = productos.map((producto) =>
          this.resumenInventario(producto)
        ); // Asigna los datos a this.inventario
        this.obtenerColumnas(this.inventario);
      }
    );
  }

  resumenInventario(inventario: InventarioModel): InfoInterface {
    return {
      numeroLote: inventario.numeroLote,
      nombreProducto: inventario.nombreProducto,
      precio: inventario.Precio,
      cantidadDisponible: inventario.CantidadDisponible,
      createAt: inventario.fechaIngreso,
    };
  }

  obtenerColumnas(inventario: InfoInterface[]) {
    if (inventario?.length > 0) {
      this.columnas = Object.keys(inventario[0]);
    }
  }

  crearProductos() {
    this.router.navigateByUrl(`${PATH.REGISTRO}`);
  }
}
