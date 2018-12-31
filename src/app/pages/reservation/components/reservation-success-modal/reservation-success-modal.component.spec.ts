import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSuccessModalComponent } from './reservation-success-modal.component';

describe('ReservationSuccessModalComponent', () => {
  let component: ReservationSuccessModalComponent;
  let fixture: ComponentFixture<ReservationSuccessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationSuccessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
