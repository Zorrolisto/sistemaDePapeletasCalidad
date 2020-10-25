import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDatosInfraccionComponent } from './mostrar-datos-infraccion.component';

describe('MostrarDatosInfraccionComponent', () => {
  let component: MostrarDatosInfraccionComponent;
  let fixture: ComponentFixture<MostrarDatosInfraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDatosInfraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDatosInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
