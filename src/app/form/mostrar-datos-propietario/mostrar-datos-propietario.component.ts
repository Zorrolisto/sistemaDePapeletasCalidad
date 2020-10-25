import { Component, Input, OnInit } from '@angular/core';
import { Contribuyente } from 'src/app/entity/contribuyente/contribuyente';
import { Empresa } from 'src/app/entity/empresa/empresa';
import { Persona } from 'src/app/entity/persona/persona';

@Component({
  selector: 'app-mostrar-datos-propietario',
  templateUrl: './mostrar-datos-propietario.component.html',
  styleUrls: ['./mostrar-datos-propietario.component.css']
})
export class MostrarDatosPropietarioComponent implements OnInit {

  @Input() propietario:Contribuyente;
  
  constructor() { }

  ngOnInit(): void {
  }

  isPersona(propietario:  Persona | Contribuyente | Empresa): propietario is Persona {
    return (propietario as Persona).dni !== undefined;
  }
}
