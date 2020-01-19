import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employeeServices/employee.service';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/models/employee/employee';

@Component({
  selector: 'app-reimbur',
  templateUrl: './reimbur.component.html',
  styleUrls: ['./reimbur.component.css']
})
export class ReimburComponent implements OnInit {
  currentUser = IEmployee;
  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    let userString: string = sessionStorage.getItem('currentUser');
    //console.log(`currentUser in apply in string mode is ${userString}`);
    if (userString === null) {
      this.router.navigate(['/login']);
    } else {
      this.currentUser = JSON.parse(userString);
      //console.log(`currentUser in apply in object mode is ${this.currentUser}`);
    }
  }

  logout() {
    this._employeeService.logout();
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  apply(){
    this.router.navigate(['/apply']);
  }

  view(){
    this.router.navigate(['/view']);
  }

  validate(){
    this.router.navigate(['/validate']);
  }
}
