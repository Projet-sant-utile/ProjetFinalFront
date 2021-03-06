import { HpService } from '../../../../service/hp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-health-professional',
  templateUrl: './list-health-professional.component.html',
  styleUrls: ['./list-health-professional.component.css']
})
export class ListHealthProfessionalComponent implements OnInit {

  hp: any[] = [];

  constructor(private hpService: HpService, private router: Router) { }
  ngOnInit() {
    this.findAll();
    console.log('a' + this.hp);
  }

  findAll() {
    this.hpService.findAll().subscribe((value: any[]) => {
        console.log(value);
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
