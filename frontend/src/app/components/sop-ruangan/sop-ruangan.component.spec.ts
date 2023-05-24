import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopRuanganComponent } from './sop-ruangan.component';

describe('SopRuanganComponent', () => {
  let component: SopRuanganComponent;
  let fixture: ComponentFixture<SopRuanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopRuanganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopRuanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
