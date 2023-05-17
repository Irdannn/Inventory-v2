import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintAllCardComponent } from './print-all-card.component';

describe('PrintAllCardComponent', () => {
  let component: PrintAllCardComponent;
  let fixture: ComponentFixture<PrintAllCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintAllCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintAllCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
