import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateJobsComponent } from './admin-update-jobs.component';

describe('AdminUpdateJobsComponent', () => {
  let component: AdminUpdateJobsComponent;
  let fixture: ComponentFixture<AdminUpdateJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUpdateJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
