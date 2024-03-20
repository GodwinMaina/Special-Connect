import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpMessagesComponent } from './sp-messages.component';

describe('SpMessagesComponent', () => {
  let component: SpMessagesComponent;
  let fixture: ComponentFixture<SpMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
