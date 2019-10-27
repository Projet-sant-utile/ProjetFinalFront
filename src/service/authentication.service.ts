import { PatientService } from './patient.service';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userPassword: any;
  email: any;

  constructor(private patientService: PatientService) { }

  authenticate(id: any, password: any) {
    this.patientService.getOne(id).subscribe((data: any) => {
      this.userPassword = data.password;
      console.log('-------------------------------------------------------------');
      console.log(this.userPassword);
      console.log('-------------------------------------------------------------');
      this.email = data.email;
      console.log(this.email);
      console.log('-------------------------------------------------------------');
    });
    if ( password === this.userPassword) {
      sessionStorage.setItem('email', this.email);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const email = sessionStorage.getItem('email');
    console.log(!(email === null));
    return !(email === null);
  }

  logOut() {
    sessionStorage.removeItem('email');
  }
}
