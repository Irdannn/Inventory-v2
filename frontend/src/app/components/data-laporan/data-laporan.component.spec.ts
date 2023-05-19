import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLaporanComponent } from './data-laporan.component';

describe('DataLaporanComponent', () => {
  let component: DataLaporanComponent;
  let fixture: ComponentFixture<DataLaporanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataLaporanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataLaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
