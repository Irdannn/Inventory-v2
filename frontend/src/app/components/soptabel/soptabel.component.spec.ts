import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopTableComponent } from './soptabel.component';

describe('SopComponent', () => {
  let component: SopTableComponent;
  let fixture: ComponentFixture<SopTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
