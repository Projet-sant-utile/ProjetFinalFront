import { LogoutComponent } from './authentication/logout/logout.component';
import { LoginComponent } from './authentication/login/login.component';
import { ProfilPatientComponent } from './user/patient/profil-patient/profil-patient.component';
import { MapComponent } from './map/map.component';
import { UpdateCityHallComponent } from './user/city-hall/update-city-hall/update-city-hall.component';
import { CreateCityHallComponent } from './user/city-hall/create-city-hall/create-city-hall.component';
import { CityHallComponent } from './user/city-hall/city-hall.component';
import { ListPatientComponent } from './user/patient/list-patient/list-patient.component';
import { CreatePatientComponent } from './user/patient/create-patient/create-patient.component';
import { UpdatePatientComponent } from './user/patient/update-patient/update-patient.component';
import { ListCityHallComponent } from './user/city-hall/list-city-hall/list-city-hall.component';
// tslint:disable-next-line:max-line-length
import { UpdateHealthProfessionalComponent } from './user/health-professional/update-health-professional/update-health-professional.component';
// tslint:disable-next-line:max-line-length
import { CreateHealthProfessionalComponent } from './user/health-professional/create-health-professional/create-health-professional.component';
import { ListHealthProfessionalComponent } from './user/health-professional/list-health-professional/list-health-professional.component';
import { HealthProfessionalComponent } from './user/health-professional/health-professional.component';
import { UserComponent } from './user/user.component';
import { PatientComponent } from './user/patient/patient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  {
    path: 'user', component: UserComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'map', component: MapComponent
  },
  {
    path: 'medecin', component: HealthProfessionalComponent, children: [
      { path: 'list', component: ListHealthProfessionalComponent },
      { path: 'ajout', component: CreateHealthProfessionalComponent },
      { path: 'update', component: UpdateHealthProfessionalComponent }
    ]
  },
  {
    path: 'patient', component: PatientComponent, children: [
      { path: 'list', component: ListPatientComponent },
      { path: 'ajout', component: CreatePatientComponent },
      { path: 'update', component: UpdatePatientComponent },
      { path: 'profil', component: ProfilPatientComponent }
    ]
  },
  {
    path: 'mairie', component: CityHallComponent, children: [
      { path: 'list', component: ListCityHallComponent },
      { path: 'ajout', component: CreateCityHallComponent },
      { path: 'update', component: UpdateCityHallComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
