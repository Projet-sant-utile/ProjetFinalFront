import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCityHallComponent } from './update-city-hall.component';

describe('UpdateCityHallComponent', () => {
  let component: UpdateCityHallComponent;
  let fixture: ComponentFixture<UpdateCityHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCityHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCityHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
