import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IProductos } from '../../interfaces/producto';

@Component({
  selector: 'app-cabecera-component',
  standalone: false,
  templateUrl: './cabecera-component.html',
  styleUrl: './cabecera-component.css'
})
export class CabeceraComponent implements OnInit {
  mostrar: 'inicio' | 'buscador' = 'inicio';

  productosBuscados: IProductos[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Cada vez que cambie la ruta actualiza "mostrar"
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects.includes('/buscador')) {
        this.mostrar = 'buscador';
      } else if (event.urlAfterRedirects.includes('/inicio')) {
        this.mostrar = 'inicio';
      }
    });
  }

  irAInicio() {
    this.router.navigate(['/inicio']);
  }

  irABuscador() {
    this.router.navigate(['/buscador']);
  }
}
