import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _url: string = "http://localhost:8080/rembursmentApp/register";
  constructor(private _http: HttpClient) { }

  register(userData){
   return this._http.post<any>(this._url, JSON.stringify(userData));
  }

}
