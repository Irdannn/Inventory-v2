import { ComponentFixture, TestBed } from '@angular/core/testing';

import { printAllCardComponent } from './printAllCard.component';

describe('GetProductByCategoryComponent', () => {
  let component: printAllCardComponent;
  let fixture: ComponentFixture<printAllCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ printAllCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(printAllCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
