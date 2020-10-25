import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contribuyente } from 'src/app/entity/contribuyente/contribuyente';
import { Infraccion } from 'src/app/entity/infraccion/infraccion';
import { Papeleta } from 'src/app/entity/papeleta/papeleta';
import { Vehiculo } from 'src/app/entity/vehiculo/vehiculo';
import { PapeletaService } from 'src/app/services/papeletaService/papeleta.service';

@Component({
  selector: 'app-papeleta',
  templateUrl: './papeleta.component.html',
  styleUrls: ['./papeleta.component.css']
})
export class PapeletaComponent implements OnInit {

  papeleta: Papeleta;
  numeroDePapeletas:number;
  constructor(private papeletaService:PapeletaService,
    private router         :Router,
    private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.papeleta = new Papeleta();
    this.papeleta.infractor = new Contribuyente();
    this.cargarPapeleta();
  }
  
  public cargarPapeleta(): void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){ //Si existe id
        this.papeletaService.getPapeleta(id).subscribe(
            (Papeleta)=> this.papeleta = Papeleta);
      }else{
        this.inicializarPapeleta();
      }
    })
  }
  inicializarPapeleta(): void{
    this.papeleta = new Papeleta();
    this.papeletaService.getCountPapeletas().subscribe(
      (count)=>(this.numeroDePapeletas  = count)
    );
    this.papeleta.id = this.numeroDePapeletas;
    this.papeleta.hora ="";
    this.papeleta.lugar = "";
    this.papeleta.observacion = "";
    this.papeleta.licencia = "";
    this.papeleta.infractor = new Contribuyente();
    this.papeleta.infraccion = new Infraccion();
    this.papeleta.propietario = new Contribuyente();
    this.papeleta.vehiculo = new Vehiculo();
  }

  save(){
    console.log("Boton presionado");
    if(this.verificarValidez()){
      if(!this.numeroDePapeletas){
        this.papeleta.situacion = "Pendiente";
        this.papeletaService.createPapeleta(this.papeleta).subscribe(
          papeleta => { 
            console.log("Guardado");
            console.log(this.papeleta.fechaImposicion);
          },
          error =>{
            console.log("Error");
            console.log(this.papeleta.fechaImposicion);
          }
        );
      }else{
        this.papeletaService.actualizarPapeleta(this.papeleta).subscribe(
          papeleta => { console.log("Guardado");
          },
          error =>{
            console.log("Error");
          }
        );
      }
    }else{
      console.log("Error");
    }

  }
  verificarValidez():boolean{
    if(!this.papeleta.licencia){
      return false;
    }
    if(!this.papeleta.observacion || this.papeleta.observacion==""){
      return false;
    }
    if(!this.papeleta.lugar || this.papeleta.lugar==""){
      return false;
    }
    if(!this.papeleta.fechaImposicion){
      return false;
    }
    if(!this.papeleta.hora){
      return false;
    }
    if(!this.papeleta.infractor){
      return false;
    }
    if(!this.papeleta.propietario){
      return false;
    }
    if(!this.papeleta.infraccion){
      return false;
    }
    if(!this.papeleta.vehiculo){
      return false;
    }
    if(!this.papeleta.licencia){
      return false;
    }
    return true;
  }

  syncPropietario($event: any){
    console.log($event.id);
    this.papeleta.propietario = $event;
  }  
  syncInfractor($event: any){
    console.log($event.id);
    console.log($event.nombres);
    this.papeleta.infractor = $event;
  }
  syncLicencia($event: any){
    console.log($event);
    this.papeleta.licencia = $event;
  }
  syncVehiculo($event: any){
    console.log($event.id);
    this.papeleta.vehiculo = $event;
  }
  syncInfraccion($event: any){
    console.log($event.id);
    this.papeleta.infraccion = $event;
  }
}
