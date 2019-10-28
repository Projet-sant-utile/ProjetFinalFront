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

      phoneNumber: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null, []),
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

      this.id = param[this.id];
      if (this.id) {
        this.cityHallService.getOne(this.id).subscribe((response: any) => {

          this.chForm.setValue(response);

        });


      }

    });
  }

  add() {

    console.log('mot de passe entré dans le formulaire : ' + this.chForm.get('password').value);
    this.chForm.get('password').setValue(Md5.hashAsciiStr(this.chForm.get('password').value));
    console.log('mot de passe chiffré et envoyé à la BDD : ' + this.chForm.get('password').value);
    this.cityHallService.add(this.chForm.value).subscribe(response => {
    });

  }

  /* findIndexToUpdate(item) {
      return item.id === this;
    }


  update() {
      this.cityHallService.update(this.chForm.value)
        .subscribe((response: any) => {

          this.ch = this.cityHallService.ch.find(this.findIndexToUpdate, response.body.id);

          const index = this.cityHallService.ch.indexOf(this.ch);

          this.cityHallService.ch.splice(index, 1, response.body);
        });
    } */
}


