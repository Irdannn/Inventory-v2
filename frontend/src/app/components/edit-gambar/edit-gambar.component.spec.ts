import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGambarComponent } from './edit-gambar.component';

describe('EditGambarComponent', () => {
  let component: EditGambarComponent;
  let fixture: ComponentFixture<EditGambarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGambarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGambarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
