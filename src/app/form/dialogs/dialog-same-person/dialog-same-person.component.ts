import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-same-person',
  templateUrl: './dialog-same-person.component.html',
  styleUrls: ['./dialog-same-person.component.css']
})
export class DialogSamePersonComponent implements OnInit {

  verdadero:boolean = true;
  falso:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
