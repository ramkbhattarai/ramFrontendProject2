import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employeeServices/employee.service';
import { IEmployee } from 'src/app/models/employee/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   public employees: IEmployee[] = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
     this._employeeService.getEmployess()
     .subscribe(data => this.employees = data)
     ,error =>{
      console.log(error);
     };
  }

}
