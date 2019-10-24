import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCityHallComponent } from './list-city-hall.component';

describe('ListCityHallComponent', () => {
  let component: ListCityHallComponent;
  let fixture: ComponentFixture<ListCityHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCityHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCityHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
