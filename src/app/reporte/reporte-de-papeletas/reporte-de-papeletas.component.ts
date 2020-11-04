import { Component, OnInit } from '@angular/core';
import { PapeletaService } from 'src/app/services/papeletaService/papeleta.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reporte-de-papeletas',
  templateUrl: './reporte-de-papeletas.component.html',
  styleUrls: ['./reporte-de-papeletas.component.css']
})
export class ReporteDePapeletasComponent implements OnInit {

  resultadosDeCalculos: Map<string,number> = new Map<string,number>(); 
  dni:String;
  ruc:String;
  placaVehiculo:String;
  condicionFecha:String;
  fechaABuscar:String;
  equal:String;
  
  hoy:Date = new Date();

  constructor(private papeletaService:PapeletaService){ 
  }

  ngOnInit(): void {
  }
  
  Buscar(any:any){
    this.dni = any[0];  
    console.log(this.dni);
    this.ruc = any[1];  
    this.placaVehiculo = any[2];
    this.condicionFecha = any[3];
    this.fechaABuscar = any[4];
    this.equal = any[5]; 
  } 
}
