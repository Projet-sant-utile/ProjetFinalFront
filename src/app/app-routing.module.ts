import { UpdateCityHallComponent } from './user/city-hall/update-city-hall/update-city-hall.component';
import { CreateCityHallComponent } from './user/city-hall/create-city-hall/create-city-hall.component';
import { CityHallComponent } from './user/city-hall/city-hall.component';
import { ListPatientComponent } from './user/patient/list-patient/list-patient.component';
import { CreatePatientComponent } from './user/patient/create-patient/create-patient.component';
import { UpdatePatientComponent } from './user/patient/update-patient/update-patient.component';
import { ListCityHallComponent } from './user/city-hall/list-city-hall/list-city-hall.component';
import { UpdateHealthProfessionalComponent } from './user/health-professional/update-health-professional/update-health-professional.component';
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
  // {
  //   path: 'medecin', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'medecin/list', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'medecin/ajout', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'medecin/update', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'patient', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'patient/list', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'patient/ajout', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'patient/update', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'mairie', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'mairie/list', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'mairie/ajout', component: HealthProfessionalComponent
  // },
  // {
  //   path: 'mairie/update', component: HealthProfessionalComponent
  // },

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
      { path: 'update', component: UpdatePatientComponent }
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
