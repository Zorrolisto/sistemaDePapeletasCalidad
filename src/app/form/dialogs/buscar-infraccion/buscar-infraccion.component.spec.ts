import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarInfraccionComponent } from './buscar-infraccion.component';

describe('BuscarInfraccionComponent', () => {
  let component: BuscarInfraccionComponent;
  let fixture: ComponentFixture<BuscarInfraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarInfraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
