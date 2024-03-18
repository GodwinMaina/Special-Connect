import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistUpdateProfileComponent } from './specialist-update-profile.component';

describe('SpecialistUpdateProfileComponent', () => {
  let component: SpecialistUpdateProfileComponent;
  let fixture: ComponentFixture<SpecialistUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialistUpdateProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialistUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
