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

}
