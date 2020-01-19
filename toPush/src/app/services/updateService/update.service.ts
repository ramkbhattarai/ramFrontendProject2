import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private _url: string = "http://localhost:8080/rembursmentApp/update";
  //private _nextUrl: string = "http://localhost:8080/rembursmentApp/reimById";
  constructor(private _http: HttpClient) { }

  update(updateData) {
    return this._http.post<any>(this._url, JSON.stringify(updateData));
  }
  // get(getData) {
  //   return this._http.post<any>(this._nextUrl, JSON.stringify(getData));
  // }
}
