import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfraccionComponent } from './dialog-infraccion.component';

describe('DialogInfraccionComponent', () => {
  let component: DialogInfraccionComponent;
  let fixture: ComponentFixture<DialogInfraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInfraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
