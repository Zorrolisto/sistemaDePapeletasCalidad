import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Papeleta } from 'src/app/entity/papeleta/papeleta';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements AfterContentInit {

  @Input() papeleta:Papeleta;
  
  fechaImposicionFormControl = new FormControl('', [
    Validators.required
  ]);  
  horaFormControl = new FormControl('', [
    Validators.required
  ]);
  lugarFormControl = new FormControl('', [
    Validators.required
  ]);
  observacionesFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }
  ngAfterContentInit(): void {
  }
  syncFechaImposicion(any){
    console.log(this.papeleta.fechaImposicion);
  }
}
