import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistSignupComponent } from './specialist-signup.component';

describe('SpecialistSignupComponent', () => {
  let component: SpecialistSignupComponent;
  let fixture: ComponentFixture<SpecialistSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialistSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialistSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
