import { distribuidorInterface } from '../interface/info.interface';

export class InventarioModel {
  static numeroLote: string;
  static nombreProducto: string;
  static CantidadDisponible: number;
  static Precio: number;
  static distribuidor: {
    nit: string;
    razonSocial: string;
    telefono: number;
    direccion: string;
  };
  static proveedor: any;
  constructor(
    public numeroLote: string,
    public nombreProducto: string,
    public Precio: number,
    public distribuidor: distribuidorInterface,
    public CantidadDisponible: number,
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
