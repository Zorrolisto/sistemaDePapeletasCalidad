import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contribuyente } from 'src/app/entity/contribuyente/contribuyente';
import { Empresa } from 'src/app/entity/empresa/empresa';
import { Persona } from 'src/app/entity/persona/persona';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-mostrar-datos-contribuyente',
  templateUrl: './mostrar-datos-contribuyente.component.html',
  styleUrls: ['./mostrar-datos-contribuyente.component.css']
})
export class MostrarDatosContribuyenteComponent implements OnInit {

  @Input() infractor:Contribuyente;
  
  @Input() licencia:String;

  @Output() propagar3 = new EventEmitter<any>();
  
  licenciaFormControl = new FormControl('', [
    Validators.required, 
  ]);
  
  matcher = new MyErrorStateMatcher();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  syncLicencia(){
    console.log(this.licencia);
    this.propagar3.emit(this.licencia);
  }

  isPersona(infractor:  Persona | Contribuyente | Empresa): infractor is Persona {
    return (infractor as Persona).dni !== undefined;
  }
}
