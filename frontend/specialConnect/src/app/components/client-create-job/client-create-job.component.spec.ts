import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateJobComponent } from './client-create-job.component';

describe('ClientCreateJobComponent', () => {
  let component: ClientCreateJobComponent;
  let fixture: ComponentFixture<ClientCreateJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCreateJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientCreateJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
