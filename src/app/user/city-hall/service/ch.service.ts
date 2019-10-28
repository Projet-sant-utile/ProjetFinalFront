import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CityHallService {

    URL = 'http://localhost:8082/apiCityHall';
    ch: any[] = [];
    editMode = false;

    constructor(private http: HttpClient) { }


    add(ch: any) {
        return this.http.post(this.URL + '/add', ch, { observe: 'response' });
    }

    update(ch: any) {
        return this.http.put(this.URL + '/update', ch, { observe: 'response' });
    }

    findAll() {
        return this.http.get<any[]>(this.URL + '/CityHalls').pipe(map(value => this.ch = value));
    }

    delete(id: any) {
        return this.http.delete(this.URL + '/delete/' + id);
    }

    getOne(id: any) {
        return this.http.get<any>(this.URL + '/get/' + id);
    }
}
