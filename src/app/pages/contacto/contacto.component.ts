import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { InventarioComponent } from '../administrar-inventario/inventario/inventario.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  imports: [RouterLink],
})
export class ContactoComponent {}
