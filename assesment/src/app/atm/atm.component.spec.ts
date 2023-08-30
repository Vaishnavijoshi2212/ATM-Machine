import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmmachineComponent } from './atmmachine.component';

describe('AtmmachineComponent', () => {
  let component: AtmmachineComponent;
  let fixture: ComponentFixture<AtmmachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtmmachineComponent]
    });
    fixture = TestBed.createComponent(AtmmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
