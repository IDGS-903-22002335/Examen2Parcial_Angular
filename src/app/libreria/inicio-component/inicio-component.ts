import { Component, OnInit } from '@angular/core';

import { Libreria } from '../services/libreria';
import { IProductos } from '../../interfaces/producto';

@Component({
  selector: 'app-inicio-component',
  standalone: false,
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.css'
})
export class InicioComponent {
  productos: IProductos[] = [];
  isResultadoLoaded = false;

  constructor(private _libreriaService: Libreria) {
    this.obtenerLibros();
  }

  obtenerLibros(){
    this._libreriaService.getList().subscribe({
      next: (data) => {
        this.productos = data.slice(2,5);
        this.isResultadoLoaded = true;
      }, error:(e) => {
      console.error('Error cargando productos', e);
    }
    });
  }

  
}
