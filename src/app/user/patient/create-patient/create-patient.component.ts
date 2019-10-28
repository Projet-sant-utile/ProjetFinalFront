import { PatientService } from './../../../../service/patient.service';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patientForm: FormGroup;

  constructor(private patientService: PatientService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.patientForm = new FormGroup({
      name: new FormControl(null),
      firstname: new FormControl(null),
      email: new FormControl(null),
      birthday: new FormControl(null),
      address: new FormGroup({
        country: new FormControl(null),
        city: new FormControl(null),
        zipCode: new FormControl(null),
        streetName: new FormControl(null),
        streetNumber: new FormControl(null),
      }),
      password: new FormControl(null, []),
      confirmation: new FormControl(null, []),

      // dpControl: new FormControl()
    }
    );
  }
  add() {
    console.log('mot de passe entré dans le formulaire : ' + this.patientForm.get('password').value);
    this.patientForm.get('password').setValue(Md5.hashAsciiStr(this.patientForm.get('password').value));
    console.log('mot de passe chiffré et envoyé à la BDD : ' + this.patientForm.get('password').value);
    this.patientService.add(this.patientForm.value).subscribe(response => {
      this.patientService.patients.push(response.body);
      this.patientForm.reset();
    });
  }
}
