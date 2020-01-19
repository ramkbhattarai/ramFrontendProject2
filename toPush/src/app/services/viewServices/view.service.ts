import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reimbursement } from 'src/app/models/reim/reim';
import { IEmployee } from 'src/app/models/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
 
  private _url: string = "http://localhost:8080/rembursmentApp/reims";
  constructor(private http: HttpClient) { }

  getReims(id): Observable<Reimbursement[]> {
    return this.http.post<Reimbursement[]>(this._url, JSON.stringify({"id": id}));
  } 
}
