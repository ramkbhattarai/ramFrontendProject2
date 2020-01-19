import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  private _url: string = "http://localhost:8080/rembursmentApp/apply";
  constructor(private _http: HttpClient) { }

  apply(applyData) {
    return this._http.post<any>(this._url, applyData);
  }
}
