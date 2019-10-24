import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCityHallComponent } from './create-city-hall.component';

describe('CreateCityHallComponent', () => {
  let component: CreateCityHallComponent;
  let fixture: ComponentFixture<CreateCityHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCityHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCityHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
