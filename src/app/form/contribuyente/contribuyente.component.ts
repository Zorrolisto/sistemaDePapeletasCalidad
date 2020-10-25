import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Contribuyente } from 'src/app/entity/contribuyente/contribuyente';
import { DialogContribuyenteComponent } from '../dialogs/dialog-contribuyente/dialog-contribuyente.component';

@Component({
  selector: 'app-contribuyente',
  templateUrl: './contribuyente.component.html',
  styleUrls: ['./contribuyente.component.css']
})
export class ContribuyenteComponent implements OnInit {

  @Input() infractor:Contribuyente;

  @Input() licencia:String;
  @Output() propagar = new EventEmitter<any>();
  @Output() propagar2 = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  syncLicencia123($event: any){
    this.propagar2.emit($event);
  }

  openDialogInfractor(){
    const dialogRef = this.dialog.open( DialogContribuyenteComponent, {
      width: '1500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result!=null){
          this.infractor = result;
          this.propagar.emit(result);
        }
    });
  }
}
