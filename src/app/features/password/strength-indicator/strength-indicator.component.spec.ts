import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthIndicatorComponent } from './strength-indicator.component';

describe('StrengthIndicatorComponent', () => {
  let component: StrengthIndicatorComponent;
  let fixture: ComponentFixture<StrengthIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrengthIndicatorComponent]
    });
    fixture = TestBed.createComponent(StrengthIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
