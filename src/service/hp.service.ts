import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HpService {

    URL = 'http://localhost:8082/apiHealthProfessional';
    hp: any[] = [];
    editMode = false;

    constructor(private http: HttpClient) { }


    add(hp: any) {
        return this.http.post(this.URL + '/add', hp, { observe: 'response' });
    }

    update(hp: any) {
        return this.http.put(this.URL + '/update', hp, { observe: 'response' });
    }

    findAll() {
        return this.http.get<any[]>(this.URL + '/HealthProfessionals').pipe(map(value => this.hp = value));
    }

    delete(id: any) {
        return this.http.delete(this.URL + '/delete/' + id);
    }

    getOne(id: any) {
        return this.http.get<any>(this.URL + '/get/' + id);
    }
}
