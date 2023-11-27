import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmInputComponent } from './pm-input.component';

describe('PmInputComponent', () => {
  let component: PmInputComponent;
  let fixture: ComponentFixture<PmInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmInputComponent]
    });
    fixture = TestBed.createComponent(PmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
