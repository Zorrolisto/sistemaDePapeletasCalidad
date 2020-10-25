import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDatosContribuyenteComponent } from './mostrar-datos-contribuyente.component';

describe('MostrarDatosContribuyenteComponent', () => {
  let component: MostrarDatosContribuyenteComponent;
  let fixture: ComponentFixture<MostrarDatosContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDatosContribuyenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDatosContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
