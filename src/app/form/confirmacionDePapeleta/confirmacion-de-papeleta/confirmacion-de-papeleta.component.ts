import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Papeleta } from 'src/app/entity/papeleta/papeleta';
import { PapeletaService } from 'src/app/services/papeletaService/papeleta.service';

@Component({
  selector: 'app-confirmacion-de-papeleta',
  templateUrl: './confirmacion-de-papeleta.component.html',
  styleUrls: ['./confirmacion-de-papeleta.component.css']
})
export class ConfirmacionDePapeletaComponent implements OnInit {
  form:boolean = false;
  papeleta: Papeleta;
  propietario123:boolean = true;
  constructor(private papeletaService:PapeletaService,
    private router         :Router,
    private activatedRoute :ActivatedRoute) 
  { }

  ngOnInit(): void {
    this.cargarPapeleta();
  }
  
  public cargarPapeleta(): void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){ //Si existe id
        this.papeletaService.getPapeleta(id).subscribe(
            (Papeleta)=> this.papeleta = Papeleta);
      }
    })
  }

  syncPropietario($event: any){}  
  syncInfractor($event: any){}
  syncLicencia($event: any){}
  syncVehiculo($event: any){}
  syncInfraccion($event: any){}
  
  public goto(url:string){
    this.router.navigate([url]).then((e)=>{
      if(e){
        console.log("Navigation succesfull!");
      }else{
        console.log("Navigation has failed!");
      }
    });
  }
}
