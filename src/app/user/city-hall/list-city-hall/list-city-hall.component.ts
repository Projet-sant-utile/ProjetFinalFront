import { CityHallService } from './../../../../service/ch.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* import { chService } from 'src/user/city-hall/service/ch.service'; */

@Component({
  selector: 'app-list-city-hall',
  templateUrl: './list-city-hall.component.html',
  styleUrls: ['./list-city-hall.component.css']
})
export class ListCityHallComponent implements OnInit {
  ch: any[] = [];
  constructor(private cityHallService: CityHallService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.cityHallService.findAll().subscribe((value: any[]) => {
      this.ch = value;
    });
  }

  delete(id, index) {
    this.cityHallService.delete(id).subscribe(response => {
      this.cityHallService.ch.splice(index, 1);
    });

  }

  edit(id) {
    this.router.navigate(['/mairie/edit']);
    this.cityHallService.editMode = true;
   /*  console.log('lala'); */

  }
}

