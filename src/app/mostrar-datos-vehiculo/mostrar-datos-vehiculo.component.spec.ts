import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDatosVehiculoComponent } from './mostrar-datos-vehiculo.component';

describe('MostrarDatosVehiculoComponent', () => {
  let component: MostrarDatosVehiculoComponent;
  let fixture: ComponentFixture<MostrarDatosVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDatosVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDatosVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
