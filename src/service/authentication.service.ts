import { PatientService } from './patient.service';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private patientService: PatientService) { }

  authenticate(email: any, password: any): Observable<any> {

    return this.patientService.getByEmail(email);
  }

  isUserLoggedIn() {
    const email = sessionStorage.getItem('email');
    console.log('isUserLoggedIn' + !(email === null));
    return !(email === null);
  }

  logOut() {
    sessionStorage.removeItem('email');
  }
}
