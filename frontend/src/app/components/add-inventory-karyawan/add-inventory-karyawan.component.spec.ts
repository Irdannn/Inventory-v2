import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventoryKaryawanComponent } from './add-inventory-karyawan.component';

describe('AddInventoryKaryawanComponent', () => {
  let component: AddInventoryKaryawanComponent;
  let fixture: ComponentFixture<AddInventoryKaryawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInventoryKaryawanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInventoryKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
