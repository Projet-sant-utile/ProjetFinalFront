import { Md5 } from 'ts-md5/dist/md5';
import { CityHallService } from '../../../../service/ch.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-update-city-hall',
  templateUrl: './update-city-hall.component.html',
  styleUrls: ['./update-city-hall.component.css']
})
export class UpdateCityHallComponent implements OnInit {

  model: any;
  id: any;
  chForm: FormGroup;

  constructor(private cityHallService: CityHallService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    console.log();

    this.chForm = new FormGroup({

      email: new FormControl(null),
      password: new FormControl(null, []),
      idUser: new FormControl(null),
      phoneNumber: new FormControl(null),
      local: new FormGroup({
        idLocation: new FormControl(null),
        address: new FormGroup({
          country: new FormControl(null),
          city: new FormControl(null),
          zipCode: new FormControl(null),
          streetName: new FormControl(null),
          streetNumber: new FormControl(null),
          lat: new FormControl(null),
          lon: new FormControl(null),
        }),
        availability: new FormGroup({
          afternoonEnd: new FormControl(null),
          morningStart: new FormControl(null),
          morningEnd: new FormControl(null),
          afternoonStart: new FormControl(null),
        })
      }),
    }
    );

    this.activatedRoute.params.subscribe((param: Params) => {

      this.id = param.id;
      if (this.id) {
        console.log(this.id);
        this.cityHallService.getOne(this.id).subscribe((response: any) => {
          console.log(response);
          this.chForm.setValue(response);
        });
      }
    });
  }


  update() {
    console.log('mot de passe entré dans le formulaire : ' + this.chForm.get('password').value);
    this.chForm.get('password').setValue(Md5.hashAsciiStr(this.chForm.get('password').value));
    console.log('mot de passe chiffré et envoyé à la BDD : ' + this.chForm.get('password').value);
    this.cityHallService.update(this.chForm.value).subscribe(response => {
    });
  }

}
