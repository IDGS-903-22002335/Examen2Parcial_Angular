import { ICategoria } from "./categoria";

export interface IProductos{
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  idCategoria: number;
  idCategoriaNavigation: ICategoria;
}