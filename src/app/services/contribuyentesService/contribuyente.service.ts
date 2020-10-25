import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from 'src/app/entity/persona/persona';
import { Empresa } from 'src/app/entity/empresa/empresa';

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {

  private url:string = 'http://localhost:8080/api'

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  //BUSCAR PERSONAS
  searchPersonas(id:number, dni:String, nombres:String, apellidos:String,
    telefono:String, correo:String, direccion:String,
    placa:String, size: number, page: number): Observable<Persona[]>{
      let buscar=''; 
      buscar = id ? buscar + '&id='+id : buscar + '';
      buscar = dni ? buscar+'&dni='+dni : buscar + '';
      buscar = nombres ? buscar+'&nombres='+nombres : buscar + '';
      buscar = apellidos ? buscar+'&apellidos='+apellidos : buscar + '';
      buscar = telefono ? buscar+'&telefono='+telefono : buscar + '';
      buscar = correo ? buscar+'&correo='+correo : buscar + '';
      buscar = direccion ? buscar+'&direccion='+direccion : buscar + '';
      buscar = placa ? buscar+'&placa='+placa : buscar + '';
    return this.http.get<Persona[]>(`${this.url}/personas/busqueda?size=${size}&page=${page+1}${buscar}`);
  }
  //BUSCAR EMPRESAS
  searchEmpresas(id:number, ruc:String, razonSocial:String,
    telefono:String, correo:String, direccion:String,
    placa:String, size: number, page: number): Observable<Empresa[]>{
      let buscar=''; 
      buscar = id ? buscar + '&id='+id : buscar + '';
      buscar = ruc ? buscar+'&ruc='+ruc : buscar + '';
      buscar = razonSocial ? buscar+'&razonSocial='+razonSocial : buscar + '';
      buscar = telefono ? buscar+'&telefono='+telefono : buscar + '';
      buscar = correo ? buscar+'&correo='+correo : buscar + '';
      buscar = direccion ? buscar+'&direccion='+direccion : buscar + '';
      buscar = placa ? buscar+'&placa='+placa : buscar + '';
    return this.http.get<Empresa[]>(`${this.url}/empresas/busqueda?size=${size}&page=${page+1}${buscar}`);
  }
  //COUNT PERSONAS
  getCountPersonas():Observable<number>{
    return this.http.get<number>(`${this.url}/papeletas/count/personas`);
  }
  //COUNT EMPRESAS
  getCountEmpresas():Observable<number>{
    return this.http.get<number>(`${this.url}/papeletas/count/empresas`);
  }
}
