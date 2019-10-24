import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CityHallComponent } from './user/city-hall/city-hall.component';
import { HealthProfessionalComponent } from './user/health-professional/health-professional.component';
import { PatientComponent } from './user/patient/patient.component';
import { LocationComponent } from './location/location.component';
import { LocalComponent } from './location/local/local.component';
import { OfficeComponent } from './location/office/office.component';
import { MenuComponent } from './menu/menu.component';
import { UpdatePatientComponent } from './user/patient/update-patient/update-patient.component';
import { ListPatientComponent } from './user/patient/list-patient/list-patient.component';
import { CreatePatientComponent } from './user/patient/create-patient/create-patient.component';
import { CreateCityHallComponent } from './user/city-hall/create-city-hall/create-city-hall.component';
import { ListCityHallComponent } from './user/city-hall/list-city-hall/list-city-hall.component';
import { UpdateCityHallComponent } from './user/city-hall/update-city-hall/update-city-hall.component';
import { ListHealthProfessionalComponent } from './user/health-professional/list-health-professional/list-health-professional.component';
import { UpdateHealthProfessionalComponent } from './user/health-professional/update-health-professional/update-health-professional.component';
import { CreateHealthProfessionalComponent } from './user/health-professional/create-health-professional/create-health-professional.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CityHallComponent,
    HealthProfessionalComponent,
    PatientComponent,
    LocationComponent,
    LocalComponent,
    OfficeComponent,
    MenuComponent,
    UpdatePatientComponent,
    ListPatientComponent,
    ListCityHallComponent,
    UpdateCityHallComponent,
    ListHealthProfessionalComponent,
    UpdateHealthProfessionalComponent,
    CreateHealthProfessionalComponent,
    CreateCityHallComponent,
    CreatePatientComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
