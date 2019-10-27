import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPatientComponent } from './profil-patient.component';

describe('ProfilPatientComponent', () => {
  let component: ProfilPatientComponent;
  let fixture: ComponentFixture<ProfilPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
