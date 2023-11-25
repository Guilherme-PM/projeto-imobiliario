import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterPass1Component } from './form-register-pass1.component';

describe('FormRegisterPass1Component', () => {
  let component: FormRegisterPass1Component;
  let fixture: ComponentFixture<FormRegisterPass1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegisterPass1Component]
    });
    fixture = TestBed.createComponent(FormRegisterPass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
