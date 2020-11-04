import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contribuyente } from 'src/app/entity/contribuyente/contribuyente';
import { DialogContribuyenteComponent } from '../dialogs/dialog-contribuyente/dialog-contribuyente.component';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {
  @Input() propietario123:boolean;
  @Input() form:boolean;
  @Input() propietario:Contribuyente;
  @Output() propagar = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogPropietario(){
    const dialogRef = this.dialog.open( DialogContribuyenteComponent, {
      width: '1500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result!=null){
          this.propietario = result;
          this.propagar.emit(result);
        }
    });
  } 
}
