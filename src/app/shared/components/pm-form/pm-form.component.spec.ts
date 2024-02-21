import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmFormComponent } from './pm-form.component';

describe('FormComponent', () => {
  let component: PmFormComponent;
  let fixture: ComponentFixture<PmFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmFormComponent]
    });
    fixture = TestBed.createComponent(PmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
