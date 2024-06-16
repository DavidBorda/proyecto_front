import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css',
})
export class RegistrosComponent {
  productoForm: FormGroup;

  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.productoForm = this.formBuilder.group({
      numeroLote: ['Lote00', [Validators.required]],
      nombreProducto: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      cantidadDisponible: ['', [Validators.required]],
      nit: ['', []],
      razonSocial: ['', []],
      telefono: ['', []],
      direccion: ['', []],
    });
  }

  crearProducto() {
    console.log(this.productoForm);
  }
}
