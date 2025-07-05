import { Component, EventEmitter, Output } from '@angular/core';
import { IProductos } from '../../interfaces/producto';
import { Libreria } from '../services/libreria';
import { OutletContext } from '@angular/router';
import { ICategoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-buscador-component',
  standalone: false,
  templateUrl: './buscador-component.html',
  styleUrl: './buscador-component.css'
})
export class BuscadorComponent {
 nombreLibro: string = '';
  productos: IProductos[] = [];
  categorias: ICategoria[] = [];
  categoriaSeleccionada: number = 0; 
  isResultadoLoaded = false;
  @Output() resultadoBusqueda = new EventEmitter<IProductos[]>();

  constructor(private libreria: Libreria) {
    this.obtenerLibros();
    this.obetnerCategoria();
  }

    obtenerLibros(){
    this.libreria.getList().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.resultadoBusqueda.emit(this.productos)
      }, error:(e) => {
      console.error('Error cargando productos', e);
    }
    });
  }

  obetnerCategoria(){
        // Cargar categorías
    this.libreria.getCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
        this.isResultadoLoaded = true;
      },
      error: (err) => {
        console.error('Error cargando categorías', err);
      }
    });
  }
 

  filtrar() {
    const filtroNombre = this.nombreLibro.toLowerCase();
    const filtroCategoria = this.categoriaSeleccionada;

    const productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filtroNombre) &&
      (filtroCategoria === 0 || producto.idCategoria === filtroCategoria)
    );

    this.resultadoBusqueda.emit(productosFiltrados);
  }
}
