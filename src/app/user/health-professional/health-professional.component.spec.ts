import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProfessionalComponent } from './health-professional.component';

describe('HealthProfessionalComponent', () => {
  let component: HealthProfessionalComponent;
  let fixture: ComponentFixture<HealthProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
