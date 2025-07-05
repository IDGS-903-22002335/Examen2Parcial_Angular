import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera-component/cabecera-component';
import { FormsModule } from '@angular/forms';
import { PaginaInicio } from './pagina-inicio/pagina-inicio';
import { InicioComponent } from './inicio-component/inicio-component';
import { FooterComponent } from './footer-component/footer-component';
import { BuscadorComponent } from './buscador-component/buscador-component';
import { ListadoProductos } from './listado-productos/listado-productos';
import { Libreria } from './services/libreria';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';



@NgModule({
  declarations: [
    PaginaInicio,
    CabeceraComponent,
    InicioComponent,
    FooterComponent,
    BuscadorComponent,
    ListadoProductos

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
   PaginaInicio,
   CabeceraComponent,
    InicioComponent,
    FooterComponent,
    BuscadorComponent,
    ListadoProductos
  ],

  providers: [
    Libreria
  ]
})
export class LibreriaModule { }
