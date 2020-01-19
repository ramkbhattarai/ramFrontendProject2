import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/employee/employee';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employeeServices/employee.service';
import { Reimbursement } from 'src/app/models/reim/reim';
import { ViewService } from 'src/app/services/viewServices/view.service';
@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  allReims: Reimbursement[];
  currentUser = IEmployee;
  constructor(private router: Router, private _employee: EmployeeService, private _view: ViewService) { }
  employees: IEmployee[];
  
  ngOnInit() {
    let userString: string = sessionStorage.getItem('currentUser');
    this.currentUser = JSON.parse(userString)
    if (userString === null || this.currentUser["role_id"] !== 2) {
      this.router.navigate(['/login']);
    }
    this._employee.getEmployess().subscribe(
      (response: IEmployee[]) =>{
        this.employees = response;
      }
      
    ),
      error => console.log("Error!", error)
  }

  handleClick(id: any){
    this._view.getReims(id).subscribe(
      (response: Reimbursement[]) => {
        console.log(response)
        this.allReims = response;
      }
    ),
      error => console.log("Error", error)
  }
  handleBack(){
    this.router.navigate(['/reimbursement']);
  }
}
