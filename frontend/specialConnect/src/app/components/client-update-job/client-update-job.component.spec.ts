import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdateJobComponent } from './client-update-job.component';

describe('ClientUpdateJobComponent', () => {
  let component: ClientUpdateJobComponent;
  let fixture: ComponentFixture<ClientUpdateJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUpdateJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientUpdateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
