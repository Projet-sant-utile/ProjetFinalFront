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
    MenuComponent
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
