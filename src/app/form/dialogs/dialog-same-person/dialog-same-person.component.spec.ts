import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSamePersonComponent } from './dialog-same-person.component';

describe('DialogSamePersonComponent', () => {
  let component: DialogSamePersonComponent;
  let fixture: ComponentFixture<DialogSamePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSamePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSamePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
