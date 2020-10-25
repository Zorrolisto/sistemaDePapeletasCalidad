import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContribuyenteComponent } from './dialog-contribuyente.component';

describe('DialogContribuyenteComponent', () => {
  let component: DialogContribuyenteComponent;
  let fixture: ComponentFixture<DialogContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContribuyenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
