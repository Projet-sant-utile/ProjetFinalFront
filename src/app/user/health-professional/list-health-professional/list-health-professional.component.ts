import { hpService } from './../../../../service/hp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-health-professional',
  templateUrl: './list-health-professional.component.html',
  styleUrls: ['./list-health-professional.component.css']
})
export class ListHealthProfessionalComponent implements OnInit {

  hp: any[] = [];

  constructor(private hppService: hpService, private router: Router) { }
  ngOnInit() {
    this.findAll();
    console.log('a' + this.hp);
  }

  findAll() {
    this.hppService.findAll().subscribe((value: any[]) => {
        console.log(value);
        this.hp = value;
    });
  }

  delete(id, index) {
    this.hppService.delete(id).subscribe(response => {
      this.hppService.hp.splice(index, 1);
    });

  }

  edit(id) {
    this.router.navigate(['/medecin/update/', id]);
    this.hppService.editMode = true;
  }

}
