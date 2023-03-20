import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanComponent } from './laporan.component';

describe('DashboardComponent', () => {
  let component: LaporanComponent;
  let fixture: ComponentFixture<LaporanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
