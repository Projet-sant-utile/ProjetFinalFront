import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
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
// tslint:disable-next-line:max-line-length
import { UpdateHealthProfessionalComponent } from './user/health-professional/update-health-professional/update-health-professional.component';
// tslint:disable-next-line:max-line-length
import { CreateHealthProfessionalComponent } from './user/health-professional/create-health-professional/create-health-professional.component';
import { MapComponent } from './map/map.component';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';

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
    CreatePatientComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
