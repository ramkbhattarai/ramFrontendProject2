import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../../models/employee/employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "http://localhost:8080/rembursmentApp/users";
  
  
  constructor(private http: HttpClient) { }

  getEmployess(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  } 
  logout() {
    return this.http.post<void>("http://localhost:8080/rembursmentApp/logout", {});
  }
}
