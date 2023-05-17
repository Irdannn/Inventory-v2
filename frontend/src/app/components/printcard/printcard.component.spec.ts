import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintcardComponent } from './printcard.component';

describe('PrintcardComponent', () => {
  let component: PrintcardComponent;
  let fixture: ComponentFixture<PrintcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
