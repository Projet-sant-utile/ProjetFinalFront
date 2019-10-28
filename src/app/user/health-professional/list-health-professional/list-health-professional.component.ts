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

  constructor(private hpService: hpService, private router: Router) { }
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.hpService.findAll().subscribe((value: any[]) => {
        this.hp = value;
    });
  }

  delete(id, index) {
    this.hpService.delete(id).subscribe(response => {
      this.hpService.hp.splice(index, 1);
    });

  }

  edit(id) {
    this.router.navigate(['/medecin/update/', id]);
    this.hpService.editMode = true;
  }

}
