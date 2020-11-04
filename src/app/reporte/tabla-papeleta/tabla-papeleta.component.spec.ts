import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPapeletaComponent } from './tabla-papeleta.component';

describe('TablaPapeletaComponent', () => {
  let component: TablaPapeletaComponent;
  let fixture: ComponentFixture<TablaPapeletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPapeletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPapeletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
