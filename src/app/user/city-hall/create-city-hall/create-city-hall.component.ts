import { Md5 } from 'ts-md5/dist/md5';
import { CityHallService } from './../../../../service/ch.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-city-hall',
  templateUrl: './create-city-hall.component.html',
  styleUrls: ['./create-city-hall.component.css']
})

export class CreateCityHallComponent implements OnInit {
  chForm: FormGroup;
  id: any;
  ch: any;
  constructor(private cityHallService: CityHallService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.chForm = new FormGroup({

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
      }),

      phoneNumber: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null, []),
    }
    );
  }

  add() {

    console.log('mot de passe entré dans le formulaire : ' + this.chForm.get('password').value);
    this.chForm.get('password').setValue(Md5.hashAsciiStr(this.chForm.get('password').value));
    console.log('mot de passe chiffré et envoyé à la BDD : ' + this.chForm.get('password').value);
    this.cityHallService.add(this.chForm.value).subscribe(response => {
      this.cityHallService.ch.push(response.body);
      this.chForm.reset();
    });

  }


}


