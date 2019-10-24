import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHealthProfessionalComponent } from './create-health-professional.component';

describe('CreateHealthProfessionalComponent', () => {
  let component: CreateHealthProfessionalComponent;
  let fixture: ComponentFixture<CreateHealthProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHealthProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHealthProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
