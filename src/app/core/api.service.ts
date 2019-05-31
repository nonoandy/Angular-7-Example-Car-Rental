import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    let obj;
    this.getJSON().subscribe(data => obj = data, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }

  getDetails(): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          r.push(item);
        }
        return r;
      });
  }

  getLocations(): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          r.push(item['location']);
        }
        return new Set(r);
      });
  }

}
