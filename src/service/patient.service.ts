import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  URL = 'http://localhost:8082/apiPatient';
  patients: any[] = [];
  constructor(private http: HttpClient) { }

  add(patient: any) {

    return this.http.post(this.URL + '/add', patient, { observe: 'response' });

  }
  update(patient: any) {

    return this.http.put(this.URL + '/update', patient, { observe: 'response' });

  }

  findAll() {

    return this.http.get<any[]>(this.URL + '/patients').pipe(map(value => this.patients = value));

  }

  delete(id: any) {

    return this.http.delete(this.URL + '/delete/' + id);

  }

  getOne(id: any) {

    return this.http.get<any>(this.URL + '/get/' + id);

  }

}
