import { CityHallService } from './../service/ch.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-city-hall',
  templateUrl: './create-city-hall.component.html',
  styleUrls: ['./create-city-hall.component.css']
})

export class CreateCityHallComponent implements OnInit {
  form: FormGroup;
  id: any;
  ch: any;
  constructor(private cityHallService: CityHallService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({

      id: new FormControl(),
      address: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.minLength(6), Validators.required]),
      local: new FormControl(null)
    });

    this.activatedRoute.params.subscribe((param: Params) => {

        this.id = param[this.id];
        if (this.id) {
          this.cityHallService.getOne(this.id).subscribe((response: any) => {

            this.form.setValue(response);

          });


        }

      });
    }

  add() {

      this.cityHallService.add(this.form.value).subscribe(response => {

        this.cityHallService.ch.push(response.body);
        this.form.reset();


      });

    }

  findIndexToUpdate(item) {
      return item.id === this;
    }


  update() {
      this.cityHallService.update(this.form.value)
        .subscribe((response: any) => {

          this.ch = this.cityHallService.ch.find(this.findIndexToUpdate, response.body.id);

          const index = this.cityHallService.ch.indexOf(this.ch);

          this.cityHallService.ch.splice(index, 1, response.body);
        });
    }
}


