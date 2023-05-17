import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapeminjamanComponent } from './datapeminjaman.component';

describe('DatapeminjamanComponent', () => {
  let component: DatapeminjamanComponent;
  let fixture: ComponentFixture<DatapeminjamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapeminjamanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapeminjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
