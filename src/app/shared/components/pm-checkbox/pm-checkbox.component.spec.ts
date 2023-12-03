import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmCheckboxComponent } from './pm-checkbox.component';

describe('PmCheckboxComponent', () => {
  let component: PmCheckboxComponent;
  let fixture: ComponentFixture<PmCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmCheckboxComponent]
    });
    fixture = TestBed.createComponent(PmCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
