import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Papeleta } from 'src/app/entity/papeleta/papeleta';
import { PapeletaService } from 'src/app/services/papeletaService/papeleta.service';
import { DialogSamePersonComponent } from '../dialogs/dialog-same-person/dialog-same-person.component';
import Swal from 'sweetalert2'
import { TasaService } from 'src/app/services/tasaServuce/tasa.service';

@Component({
  selector: 'app-papeleta',
  templateUrl: './papeleta.component.html',
  styleUrls: ['./papeleta.component.css']
})
export class PapeletaComponent implements OnInit {
  form:boolean = true;
  propietario123:boolean = true;
  papeleta: Papeleta;
  numeroDePapeletas:number;
  constructor(private papeletaService:PapeletaService,
    private tasaService:TasaService,
    private router         :Router,
    public dialog: MatDialog,
    private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.papeleta = new Papeleta();
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
    this.tasaService.getTasa().subscribe(
      (tasa) => (this.papeleta.tasa = tasa)
    );
    this.papeleta.hora ="";
    this.papeleta.lugar = "";
    this.papeleta.observacion = "";
    this.papeleta.licencia = "";
    this.papeleta.montoBruto = 0;
    this.papeleta.situacion = "Pendiente";
  }

  save(){
    if(this.verificarValidez()){
      if(this.numeroDePapeletas>0){
        this.papeleta.id = this.numeroDePapeletas + 1;
        this.papeletaService.createPapeleta(this.papeleta).subscribe(
          papeleta => { 
            Swal.fire('Nueva papeleta',
              `Papeleta guardada con éxito`,'success')
            this.goto("../papeletas/confirmacion/"+this.papeleta.id)
          },
          error =>{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message.toUpperCase(),
            }) 
          }
        );
      }else{
        this.papeletaService.actualizarPapeleta(this.papeleta).subscribe(
          papeleta => { 
            Swal.fire('Papeleta editada',
              `Papeleta guardada con éxito`,'success')
            this.goto("../papeletas/confirmacion/"+this.papeleta.id)
          },
          error =>{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.message.toUpperCase(),
            }) 
          }
        );
      }
    }

  }
  verificarValidez():boolean{
    let message:string = "Verifique ";
    let valido:boolean = true;
    if(!this.papeleta.licencia){
      message += 'la licencia, ';
      valido = false;
    }
    if(!this.papeleta.observacion || this.papeleta.observacion==""){
      message += 'la observacion, ';
      valido = false;
    }
    if(!this.papeleta.lugar || this.papeleta.lugar==""){
      message += 'el lugar, ';
      valido = false;
    }
    if(!this.papeleta.fechaImposicion){
      message += 'la fecha de imposicion, ';
      valido = false;
    }
    if(!this.papeleta.hora){
      message += 'la hora, ';
      valido = false;
    }
    if(!this.papeleta.infractor){
      message += 'el infractor, ';
      valido = false;
    }
    if(!this.papeleta.propietario){
      message += 'el propietario, ';
      valido = false;
    }
    if(!this.papeleta.infraccion){
      message += 'la infraccion, ';
      valido = false;
    }
    if(!this.papeleta.vehiculo){
      message += 'el vehiculo, ';
      valido = false;
    }
    if(!valido){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message + 'porfavor.',
      })
      return false;
    }
    return true;
  }

  syncPropietario($event: any){
    this.papeleta.propietario = $event;
  }  
  syncInfractor($event: any){
    this.papeleta.infractor = $event;
    this.openDialogSamePerson($event);
  }
  openDialogSamePerson($event: any){
    const dialogRef = this.dialog.open( DialogSamePersonComponent, {
      width: '400px',
      height: '200px'
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.papeleta.propietario = $event;
        }
    });
  }
  syncLicencia($event: any){
    this.papeleta.licencia = $event;
  }
  syncVehiculo($event: any){
    this.papeleta.vehiculo = $event;
  }
  syncInfraccion($event: any){
    this.papeleta.infraccion = $event;
  }
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
