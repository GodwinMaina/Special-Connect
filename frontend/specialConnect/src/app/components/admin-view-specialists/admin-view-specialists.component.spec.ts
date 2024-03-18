import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSpecialistsComponent } from './admin-view-specialists.component';

describe('AdminViewSpecialistsComponent', () => {
  let component: AdminViewSpecialistsComponent;
  let fixture: ComponentFixture<AdminViewSpecialistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewSpecialistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
