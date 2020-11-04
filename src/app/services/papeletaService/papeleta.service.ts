import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs'

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Papeleta } from '../../entity/papeleta/papeleta';

@Injectable({
  providedIn: 'root'
})
export class PapeletaService {

  private url:string = 'http://localhost:8080/api/papeletas'

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  createPapeleta(papeleta: Papeleta): Observable<Papeleta>{
    return this.http.post<Papeleta>(
      this.url, papeleta, {headers: this.httpHeaders}
    );
  }

  actualizarPapeleta(papeleta: Papeleta): Observable<Papeleta>{
    return this.http.put<Papeleta>(
      this.url, papeleta, {headers: this.httpHeaders}
    );
  }
  
  //OBTENER PAPELETA
  getPapeleta(id:number):Observable<Papeleta>{
    return this.http.get<Papeleta>(`${this.url}/${id}`);
  }

  //COUNT PAPELETAS
  getCountPapeletas():Observable<number>{
    return this.http.get<number>(`${this.url}/count/papeletas`);
  }

  //REPORTE PAPELETAS TABLA
  reportPapeletasTable(dni:String, ruc:String, vehiculo:String, fechaDePapeleta:String,
    fechaDePapeletaCondicion:String, equal:String, size: number, page: number): Observable<Papeleta[]>{
      let buscar=''; 
      buscar = dni ? buscar + '&dni='+dni.toString() : buscar + '';
      buscar = ruc ? buscar + '&ruc='+ruc.toString() : buscar + '';
      buscar = vehiculo ? buscar+'&vehiculo='+vehiculo : buscar + '';
      buscar = fechaDePapeleta ? buscar+'&fechaDePapeleta='+fechaDePapeleta : buscar + '';
      buscar = fechaDePapeletaCondicion ? buscar+'&fechaDePapeletaCondicion='+fechaDePapeletaCondicion : buscar + '';
      buscar = equal ? buscar+'&equal='+equal : buscar + '';
      console.log(buscar);
      return this.http.get<Papeleta[]>(`${this.url}/reporte/table?size=${size}&page=${page+1}${buscar}`);
  }
  //REPORTE PAPELETAS CALC
  reportPapeletasCalculos(dni:String, ruc:String, vehiculo:String, fechaDePapeleta:String,
    fechaDePapeletaCondicion:String, equal:String): Observable<Map<string, number>>{
      let buscar=''; 
      buscar = dni ? buscar + '&dni='+dni.toString() : buscar + '';
      buscar = ruc ? buscar + '&ruc='+ruc.toString() : buscar + '';
      buscar = vehiculo ? buscar+'&vehiculo='+vehiculo : buscar + '';
      buscar = fechaDePapeleta ? buscar+'&fechaDePapeleta='+fechaDePapeleta : buscar + '';
      buscar = fechaDePapeletaCondicion ? buscar+'&fechaDePapeletaCondicion='+fechaDePapeletaCondicion : buscar + '';
      buscar = equal ? buscar+'&equal='+equal : buscar + '';
      console.log(buscar);
    return this.http.get<Map<string, number>>(`${this.url}/reporte/calculos?none=none${buscar}`);
  }
}
