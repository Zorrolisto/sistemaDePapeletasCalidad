import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDePapeletasComponent } from './reporte-de-papeletas.component';

describe('ReporteDePapeletasComponent', () => {
  let component: ReporteDePapeletasComponent;
  let fixture: ComponentFixture<ReporteDePapeletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDePapeletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDePapeletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
