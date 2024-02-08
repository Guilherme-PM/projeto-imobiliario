import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesRegisterComponent } from './modules-register.component';

describe('ModulesRegisterComponent', () => {
  let component: ModulesRegisterComponent;
  let fixture: ComponentFixture<ModulesRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulesRegisterComponent]
    });
    fixture = TestBed.createComponent(ModulesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
