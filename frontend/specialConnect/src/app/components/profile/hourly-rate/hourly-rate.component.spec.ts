import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyRateComponent } from './hourly-rate.component';

describe('HourlyRateComponent', () => {
  let component: HourlyRateComponent;
  let fixture: ComponentFixture<HourlyRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourlyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
