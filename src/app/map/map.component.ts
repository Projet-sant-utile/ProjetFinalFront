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
  myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor 
  });

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
      this.myMarkers();
      this.mapCalcDistance(56, 6, 57, 5);
      L.circle([this.latSearch, this.lonSearch], { radius: 20000 }).addTo(this.myfrugalmap);
    })();
  }

  myPrint2() {
    L.marker([this.latSearch, this.lonSearch], { icon: this.myIcon })
      .bindPopup('Vous êtes ici').addTo(this.myfrugalmap).openPopup();


    /* this.myfrugalmap = L.map('frugalmap').setView([this.latSearch, this.lonSearch], 10); */
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  myMarkers() {
    L.marker([50.1311634, 3.8599573], { icon: this.myIcon }).addTo(this.myfrugalmap).openPopup();

    L.marker([50.5611634, 3.569785], { icon: this.myIcon }).addTo(this.myfrugalmap).openPopup();

  }

  mapCalcDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    console.log(d);
    return d;

  }

  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

}
