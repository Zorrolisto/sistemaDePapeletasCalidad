import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Infraccion } from 'src/app/entity/infraccion/infraccion';

@Injectable({
  providedIn: 'root'
})
export class InfraccionService {

  private url:string = 'http://localhost:8080/api'

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  //BUSCAR EMPRESAS
  searchInfracciones(id:number, codigo:String, calificacion:String,
    porcentaje_uit:String, agente:String, size: number, page: number): Observable<Infraccion[]>{
      let buscar=''; 
      buscar = id ? buscar + '&id='+id : buscar + '';
      buscar = codigo ? buscar+'&codigo='+codigo : buscar + '';
      buscar = calificacion ? buscar+'&calificacion='+calificacion : buscar + '';
      buscar = porcentaje_uit ? buscar+'&porcentaje_uit='+porcentaje_uit : buscar + '';
      buscar = agente ? buscar+'&agente='+agente : buscar + '';
    return this.http.get<Infraccion[]>(`${this.url}/infracciones/busqueda?size=${size}&page=${page+1}${buscar}`);
  }
  //COUNT PERSONAS
  getCountInfracciones():Observable<number>{
    return this.http.get<number>(`${this.url}/papeletas/count/infracciones`);
  }
}
