export class InventarioModel {
  constructor(
    public numerLote: string,
    public nombreProducto: string,
    public precio: number,
    public distribuidor: {
      nit: string;
      razonSocial: string;
      telefono: number;
      direccion: string;
    },
    public cantidadDisponible: number,
    public usuario: {
      _id: string;
      nombre: string;
      email: string;
    },
    public fechaIngreso: Date,
    public opiniones?: {
      comentarios: string;
      calificacion: number;
    }
  ) {}
}
