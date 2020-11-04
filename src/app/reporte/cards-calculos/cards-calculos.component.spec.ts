import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCalculosComponent } from './cards-calculos.component';

describe('CardsCalculosComponent', () => {
  let component: CardsCalculosComponent;
  let fixture: ComponentFixture<CardsCalculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCalculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
