import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfraccionComponent } from './list-infraccion.component';

describe('ListInfraccionComponent', () => {
  let component: ListInfraccionComponent;
  let fixture: ComponentFixture<ListInfraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInfraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
