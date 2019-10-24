import { HealthProfessionalComponent } from './user/health-professional/health-professional.component';
import { UserComponent } from './user/user.component';
import { PatientComponent } from './user/patient/patient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'patient', component: PatientComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'medecins', component: HealthProfessionalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
