import { PatientService } from './../../../service/patient.service';
import { AuthenticationService } from '../../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private patientService: PatientService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.authenticate(this.email, Md5.hashAsciiStr(this.password)).subscribe(
      (resp) => {
        if (resp.password === Md5.hashAsciiStr(this.password)
        ) {
          sessionStorage.setItem('email', this.email);

          this.router.navigate(['']);
          this.invalidLogin = false;
        } else {
          this.invalidLogin = true;
        }
      }
    );

  }

}
