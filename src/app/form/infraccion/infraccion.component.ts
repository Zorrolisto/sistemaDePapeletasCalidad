import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Infraccion } from 'src/app/entity/infraccion/infraccion';
import { DialogInfraccionComponent } from '../dialogs/dialog-infraccion/dialog-infraccion.component';

@Component({
  selector: 'app-infraccion',
  templateUrl: './infraccion.component.html',
  styleUrls: ['./infraccion.component.css']
})
export class InfraccionComponent implements OnInit {
  @Input() infraccion:Infraccion;
  @Output() propagar = new EventEmitter<any>();
  
  
  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogInfraccion(){
    const dialogRef = this.dialog.open( DialogInfraccionComponent, {
      width: '1500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result!=null){
          this.infraccion = result;
          this.propagar.emit(result);
        }
    });
  }

}
