import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfraccionComponent } from './tabla-infraccion.component';

describe('TablaInfraccionComponent', () => {
  let component: TablaInfraccionComponent;
  let fixture: ComponentFixture<TablaInfraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaInfraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
