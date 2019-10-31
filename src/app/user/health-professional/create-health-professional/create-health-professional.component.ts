import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HpService } from 'src/service/hp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-create-health-professional',
  templateUrl: './create-health-professional.component.html',
  styleUrls: ['./create-health-professional.component.css']
})
export class CreateHealthProfessionalComponent implements OnInit {

  model: any;
  hpForm: FormGroup;
  hpfakeForm: FormGroup;
  lat = (Math.random() * 5) + 44;
  lon = (Math.random() * 7) - 1;
  speciality = ['generaliste', 'dentiste', 'ophtalmologue', 'pediatre'];

  constructor(private hpService: HpService, private activatedRoute: ActivatedRoute, private router: Router) { }

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
    });

    this.hpfakeForm = new FormGroup({
      availability: new FormGroup({
        afternoonEnd: new FormControl(20),
        morningStart: new FormControl(8),
        morningEnd: new FormControl(12),
        afternoonStart: new FormControl(14),
      }),
      name: new FormControl('jean'),
      firstname: new FormControl('claude'),
      email: new FormControl('jeanclaude'),
      speciality: new FormControl('generaliste'),
      birthday: new FormControl('2012-11-11'),
      address: new FormGroup({
        country: new FormControl('france'),
        city: new FormControl('lyon'),
        zipCode: new FormControl('69005'),
        streetName: new FormControl('hea'),
        streetNumber: new FormControl('05'),
        lat: new FormControl(this.lat),
        lon: new FormControl(this.lon)
      }),
    });

  }
  add() {
    console.log('mot de passe entré dans le formulaire : ' + this.hpForm.get('password').value);
    this.hpForm.get('password').setValue(Md5.hashAsciiStr(this.hpForm.get('password').value));
    console.log('mot de passe chiffré et envoyé à la BDD : ' + this.hpForm.get('password').value);
    this.hpService.add(this.hpForm.value).subscribe(response => {
    });
  }



  fakeAdd() {

    for (let i = 0; i < 100; i++) {

    this.hpfakeForm.patchValue({'speciality': this.speciality[(Math.floor(Math.random() * this.speciality.length))]});
    this.hpfakeForm.patchValue({'address': {lat: (Math.random() * 1) + 45.25, lon: (Math.random() * 1) + 4.35}});
    console.log(this.hpfakeForm.value);
    this.hpService.add(this.hpfakeForm.value).subscribe(response => {
    });
  }
  }

}
