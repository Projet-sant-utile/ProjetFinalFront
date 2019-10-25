import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  faCoffee = faCoffee;
  model: any;
  date: {year: number, month: number};
  constructor(private calendar: NgbCalendar) { }
 myGroup: FormGroup;
  
  ngOnInit() {
    this.myGroup = new FormGroup({
      dpControl: new FormControl()
   });
  }

}
