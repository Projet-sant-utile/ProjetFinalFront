import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHealthProfessionalComponent } from './update-health-professional.component';

describe('UpdateHealthProfessionalComponent', () => {
  let component: UpdateHealthProfessionalComponent;
  let fixture: ComponentFixture<UpdateHealthProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHealthProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHealthProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
