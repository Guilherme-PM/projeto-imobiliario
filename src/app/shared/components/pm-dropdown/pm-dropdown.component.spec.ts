import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmDropdownComponent } from './pm-dropdown.component';

describe('PmDropdownComponent', () => {
  let component: PmDropdownComponent;
  let fixture: ComponentFixture<PmDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmDropdownComponent]
    });
    fixture = TestBed.createComponent(PmDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
