import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinventorykaryawanComponent } from './addinventorykaryawan.component';

describe('AddinventorykaryawanComponent', () => {
  let component: AddinventorykaryawanComponent;
  let fixture: ComponentFixture<AddinventorykaryawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinventorykaryawanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddinventorykaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
