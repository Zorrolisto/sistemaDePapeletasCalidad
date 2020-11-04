import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionConfirmacionComponent } from './informacion-confirmacion.component';

describe('InformacionConfirmacionComponent', () => {
  let component: InformacionConfirmacionComponent;
  let fixture: ComponentFixture<InformacionConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionConfirmacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
