import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlurBarangComponent } from './alurbarang.component';

describe('DatapeminjamanComponent', () => {
  let component: AlurBarangComponent;
  let fixture: ComponentFixture<AlurBarangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlurBarangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlurBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
