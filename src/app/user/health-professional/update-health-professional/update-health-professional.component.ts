import { Component, OnInit } from '@angular/core';
import { HpService } from 'src/service/hp.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-update-health-professional',
  templateUrl: './update-health-professional.component.html',
  styleUrls: ['./update-health-professional.component.css']
})
export class UpdateHealthProfessionalComponent implements OnInit {

  model: any;
  id: any;
  hpForm: FormGroup;

  constructor(private hpService: HpService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    console.log();



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
        lat: new FormControl(null),
        lon: new FormControl(null),
      }),
      password: new FormControl(null, []),
      idUser: new FormControl(null),
      phoneNumber: new FormControl(null),
      speciality: new FormControl(null),
      office: new FormControl(null),
      // dpControl: new FormControl()
    }
    );

    this.activatedRoute.params.subscribe((param: Params) => {

      // tslint:disable-next-line:no-string-literal
      this.id = param['id'];
      if (this.id) {
        console.log(this.id);
        this.hpService.getOne(this.id).subscribe((response: any) => {
          console.log(response);
          this.hpForm.setValue(response);
        });
      }
    });
  }


  update() {
    console.log('mot de passe entré dans le formulaire : ' + this.hpForm.get('password').value);
    this.hpForm.get('password').setValue(Md5.hashAsciiStr(this.hpForm.get('password').value));
    console.log('mot de passe chiffré et envoyé à la BDD : ' + this.hpForm.get('password').value);
    this.hpService.update(this.hpForm.value).subscribe(response => {
    });
  }

}
