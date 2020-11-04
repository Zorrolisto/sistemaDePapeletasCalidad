import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarReportePapeletasComponent } from './buscar-reporte-papeletas.component';

describe('BuscarReportePapeletasComponent', () => {
  let component: BuscarReportePapeletasComponent;
  let fixture: ComponentFixture<BuscarReportePapeletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarReportePapeletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarReportePapeletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
