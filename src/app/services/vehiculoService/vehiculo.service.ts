import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private url:string = 'http://localhost:8080/api'

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  //BUSCAR EMPRESAS
  searchVehiculos(id:number, color:String, clase:String,
    placa:String, marca:String, size: number, page: number): Observable<Vehiculo[]>{
      let buscar=''; 
      buscar = id ? buscar + '&id='+id : buscar + '';
      buscar = color ? buscar+'&color='+color : buscar + '';
      buscar = clase ? buscar+'&clase='+clase : buscar + '';
      buscar = placa ? buscar+'&placa='+placa : buscar + '';
      buscar = marca ? buscar+'&marca='+marca : buscar + '';
    return this.http.get<Vehiculo[]>(`${this.url}/vehiculos/busqueda?size=${size}&page=${page+1}${buscar}`);
  }
  //COUNT PERSONAS
  getCountVehiculos():Observable<number>{
    return this.http.get<number>(`${this.url}/papeletas/count/vehiculos`);
  }
}
