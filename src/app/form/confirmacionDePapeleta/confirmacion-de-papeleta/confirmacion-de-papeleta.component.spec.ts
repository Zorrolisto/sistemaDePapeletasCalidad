import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDePapeletaComponent } from './confirmacion-de-papeleta.component';

describe('ConfirmacionDePapeletaComponent', () => {
  let component: ConfirmacionDePapeletaComponent;
  let fixture: ComponentFixture<ConfirmacionDePapeletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionDePapeletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionDePapeletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
