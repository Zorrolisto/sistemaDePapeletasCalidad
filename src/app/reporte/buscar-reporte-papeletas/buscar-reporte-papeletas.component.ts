import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PapeletaService } from 'src/app/services/papeletaService/papeleta.service';

@Component({
  selector: 'app-buscar-reporte-papeletas',
  templateUrl: './buscar-reporte-papeletas.component.html',
  styleUrls: ['./buscar-reporte-papeletas.component.css']
})
export class BuscarReportePapeletasComponent implements OnInit {
 
  docContribuyente:number;
  placaVehiculo:String;
  opcionFecha:String='3';
  condicionFecha:String = 'equal';
  fechaRegistro:Date;
  equal:String;
  anio:number;
  year:number;
  mes:String;
  dniOruc:String='1';

  @Output()
  propagar = new EventEmitter<any>(); 

  resultadosDeCalculos: Map<string,number> = new Map<string,number>(); 

  constructor(private papeletaService:PapeletaService){ 
  }

  ngOnInit(): void {
    let hoy: Date = new Date();
    this.anio = hoy.getFullYear();
    this.year = this.anio;
    this.mes = hoy.getMonth().toString();
  }

  cambioDeOpcion($event:any){
    if(this.opcionFecha=='3'){
      this.fechaRegistro = null;
      this.year = null;
      this.mes = null;
    }
  }  

  limpiarBusqueda(){ 
    this.fechaRegistro = null;
    this.year = null;
    this.mes = null;
    this.docContribuyente = null;
    this.placaVehiculo = null;
  }

  Buscar(){
    this.equal = null;
    let dni:String = this.dniOruc=='1'&& this.docContribuyente  ? this.docContribuyente.toString() : null;
    let ruc:String = this.dniOruc=='2' && this.docContribuyente ? this.docContribuyente.toString() : null;
    let fechaABuscar = this.fechaRegistro ? this.fechaRegistro.toString() : null;
    
    if(this.opcionFecha=='1'){
      fechaABuscar = this.anio+'-'+this.mes+'-01'
      this.equal = this.anio+'-'+this.mes+'-31'
    }
    if(this.opcionFecha=='2'){
      fechaABuscar = this.anio+'-01-01'
      this.equal = this.anio+'-12-31'
    } 
    let list  = [
      dni,
      ruc,
      this.placaVehiculo,
      this.condicionFecha,
      fechaABuscar, 
      this.equal, 
    ];
    this.propagar.emit(list); 
  }
}
