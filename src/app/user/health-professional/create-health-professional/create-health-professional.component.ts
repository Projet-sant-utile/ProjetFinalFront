import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { hpService } from 'src/service/hp.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-create-health-professional',
  templateUrl: './create-health-professional.component.html',
  styleUrls: ['./create-health-professional.component.css']
})
export class CreateHealthProfessionalComponent implements OnInit {

  model: any;
  hpForm: FormGroup;

  constructor(private hpService: hpService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.hpForm = new FormGroup({
      
      availability: new FormGroup({
        afternoonEnd: new FormControl(null),
        morningStart: new FormControl(null),
        morningEnd: new FormControl(null),
        afternoonStart: new FormControl(null),
      }),

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
    console.log('mot de passe entré dans le formulaire : ' + this.hpForm.get('password').value);
    this.hpForm.get('password').setValue(Md5.hashAsciiStr(this.hpForm.get('password').value));
    console.log('mot de passe chiffré et envoyé à la BDD : ' + this.hpForm.get('password').value);
    this.hpService.add(this.hpForm.value).subscribe(response => {
    });
  }

}
