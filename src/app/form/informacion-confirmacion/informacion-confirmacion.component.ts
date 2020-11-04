import { Component, Input, OnInit } from '@angular/core';
import { Papeleta } from 'src/app/entity/papeleta/papeleta';

@Component({
  selector: 'app-informacion-confirmacion',
  templateUrl: './informacion-confirmacion.component.html',
  styleUrls: ['./informacion-confirmacion.component.css']
})
export class InformacionConfirmacionComponent implements OnInit {
 
  @Input() papeleta:Papeleta;
  
  constructor() { }

  ngOnInit(): void {
  }

}
