import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductos } from '../../interfaces/producto';
import { ICategoria } from '../../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class Libreria {

  private _endPoint: string = environment.endPoint;
  private _apiUrl: string = this._endPoint + "Productos/";
  constructor(private http: HttpClient) { }

  getList(): Observable<IProductos[]>{
    return this.http.get<IProductos[]>(`${this._apiUrl}ListaLibros`);
  }

  getProductosPorNombre(nombre: string): Observable<IProductos[]> {
  return this.http.get<IProductos[]>(`${this._apiUrl}PorNombre/${nombre}`);
}

  getCategorias(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(`${this._apiUrl}Categorias`);
  }


}
