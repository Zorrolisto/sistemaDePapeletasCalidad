import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaContribuyenteComponent } from './tabla-contribuyente.component';

describe('TablaContribuyenteComponent', () => {
  let component: TablaContribuyenteComponent;
  let fixture: ComponentFixture<TablaContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaContribuyenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
