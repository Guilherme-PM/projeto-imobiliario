import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmButtonComponent } from './pm-button.component';

describe('PmButtonComponent', () => {
  let component: PmButtonComponent;
  let fixture: ComponentFixture<PmButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmButtonComponent]
    });
    fixture = TestBed.createComponent(PmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
