import { Component } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';
import { InventarioComponent } from '../administrar-inventario/inventario/inventario.component';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  imports: [RouterLink],
})
export class InicioComponent {
  abrirmodal() {
    Swal.fire('SweetAlert2 is working!');
  }
}
