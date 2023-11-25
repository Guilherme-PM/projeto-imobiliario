import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmInputTextComponent } from './pm-input-text.component';

describe('PmInputTextComponent', () => {
  let component: PmInputTextComponent;
  let fixture: ComponentFixture<PmInputTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmInputTextComponent]
    });
    fixture = TestBed.createComponent(PmInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
