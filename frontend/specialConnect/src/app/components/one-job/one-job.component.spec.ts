import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneJobComponent } from './one-job.component';

describe('OneJobComponent', () => {
  let component: OneJobComponent;
  let fixture: ComponentFixture<OneJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
