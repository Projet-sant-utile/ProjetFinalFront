/* import { MapComponent } from './map.component'; */
/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} */

// Ajouter OnInit pour effectuer des opérations à l'initialisation du composant.
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

// Implémenter OnInit
export class MapComponent implements OnInit {

  searchAddress: string;
  latSearch: number;
  lonSearch: number;
  myfrugalmap: any;
  urlAddress: any;

  constructor(private http: HttpClient) {
  }

  // Fonction d'initialisation du composant.
  ngOnInit() {
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myfrugalmap = L.map('frugalmap').setView([46.7311634, 3.0599573], 6);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(this.myfrugalmap);


  }

  myPrint() {
    console.log('message');
    console.log(this.searchAddress);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    this.urlAddress = 'https://eu1.locationiq.com/v1/search.php?key=d716e4b235c638&q=' + this.searchAddress + '&format=json';

    // tslint:disable-next-line:max-line-length
    this.http.get(this.urlAddress)
      .subscribe((data: any) => {
        console.log('Hello');
        console.log(data);
        console.log(data[0].lat);
        this.latSearch = data[0].lat;
        console.log(data[0].lon);
        this.lonSearch = data[0].lon;
      });

    (async () => {
      // Do something before delay

      await this.delay(200);

      // Do something after
      this.myPrint2();
    })();
  }

  myPrint2() {
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    L.marker([this.latSearch, this.lonSearch], { icon: myIcon })
      .bindPopup('Vous êtes ici').addTo(this.myfrugalmap).openPopup();


    /* this.myfrugalmap = L.map('frugalmap').setView([this.latSearch, this.lonSearch], 10); */
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
