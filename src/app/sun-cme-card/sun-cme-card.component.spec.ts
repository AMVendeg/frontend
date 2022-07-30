import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUNCMECardComponent } from './sun-cme-card.component';

describe('SUNCMECardComponent', () => {
  let component: SUNCMECardComponent;
  let fixture: ComponentFixture<SUNCMECardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SUNCMECardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SUNCMECardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
