import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDatosPropietarioComponent } from './mostrar-datos-propietario.component';

describe('MostrarDatosPropietarioComponent', () => {
  let component: MostrarDatosPropietarioComponent;
  let fixture: ComponentFixture<MostrarDatosPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDatosPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDatosPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
