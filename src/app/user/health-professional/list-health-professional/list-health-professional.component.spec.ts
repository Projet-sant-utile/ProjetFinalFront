import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHealthProfessionalComponent } from './list-health-professional.component';

describe('ListHealthProfessionalComponent', () => {
  let component: ListHealthProfessionalComponent;
  let fixture: ComponentFixture<ListHealthProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHealthProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHealthProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
