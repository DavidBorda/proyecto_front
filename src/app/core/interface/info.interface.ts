export interface InfoInterface {
  numeroLote: string;
  nombreProducto: string;
  precio: number;
  cantidadDisponible: number;
  createAt: Date;
}

export interface crearProductoInterface {
  numeroLote: string;
  nombreProducto: string;
  Precio: number;
  distribuidor: distribuidorInterface;
}

export interface distribuidorInterface {
  nit: string;
  razonSocial: string;
  telefono: number;
  direccion: string;
}
