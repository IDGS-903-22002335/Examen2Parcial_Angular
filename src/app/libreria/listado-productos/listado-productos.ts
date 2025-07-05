import { Component, Input } from '@angular/core';
import { IProductos } from '../../interfaces/producto';

@Component({
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
  @Input() productos: IProductos[] = [];
}
