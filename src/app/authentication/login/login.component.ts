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
  id = '42';
  user: any;
  email: any;
  username = 'javainuse';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private patientService: PatientService) { }

  ngOnInit() {
    this.getOne(1);
  }
  getOne(id: any) {
    this.patientService.getOne(id).subscribe((data: any) => {
      console.log(data);
      console.log(data.email);
      this.email = data.email;
    });
  }
  checkLogin() {
    if (this.loginservice.authenticate(this.id, Md5.hashAsciiStr(this.password))
    ) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
