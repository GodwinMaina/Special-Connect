import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistJobsComponent } from './specialist-jobs.component';

describe('SpecialistJobsComponent', () => {
  let component: SpecialistJobsComponent;
  let fixture: ComponentFixture<SpecialistJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialistJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialistJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
