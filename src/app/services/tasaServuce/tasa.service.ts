import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tasa } from 'src/app/entity/tasa/tasa';

@Injectable({
  providedIn: 'root'
})
export class TasaService {
  private url:string = 'http://localhost:8080/api'

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  //OBTENER PAPELETA
  getTasa():Observable<Tasa>{
    return this.http.get<Tasa>(`${this.url}/papeletas/tasa`);
  }

}
