import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateJobComponent } from './admin-create-job.component';

describe('AdminCreateJobComponent', () => {
  let component: AdminCreateJobComponent;
  let fixture: ComponentFixture<AdminCreateJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCreateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
