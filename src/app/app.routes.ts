import { Routes } from '@angular/router';
import { InicioComponent } from './libreria/inicio-component/inicio-component';
import { BuscadorComponent } from './libreria/buscador-component/buscador-component';
import { CabeceraComponent } from './libreria/cabecera-component/cabecera-component';
import { ListadoProductos } from './libreria/listado-productos/listado-productos';

export const routes: Routes = [
   { path: 'inicio', component: InicioComponent },
   { path: 'buscador', component: BuscadorComponent },
   { path: '', redirectTo: 'inicio', pathMatch: 'full' }
  
];
