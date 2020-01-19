import { Component, OnInit, Input } from '@angular/core';
import { Reimbursement } from 'src/app/models/reim/reim';
import { UpdateService } from 'src/app/services/updateService/update.service';
import { IEmployee } from 'src/app/models/employee/employee';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() allReims: Reimbursement[];
  //show: boolean = false;
  reim : Reimbursement;
  currentUser: IEmployee = JSON.parse(sessionStorage.getItem("currentUser"));
  constructor(private _update: UpdateService) { }

  ngOnInit() {
  }

  handleApprove(reim: Reimbursement){
    
    let updateData = reim;
    updateData.status_id = 3;
    updateData.resolver_id = this.currentUser.id;
    delete updateData.receipt;
    delete updateData.submitted;
    delete updateData.resolved;
    console.log("here is the input approve data")
    console.log(updateData);
    this._update.update(updateData).subscribe(
      (response: Reimbursement) => console.log(response),
      error => console.error("Error!", error)
      
    );
  }

  handleDeny(reim: Reimbursement){
    
    let updateData = reim;
    updateData.status_id = 1;
    updateData.resolver_id = this.currentUser.id;
    delete updateData.receipt;
    delete updateData.submitted;
    delete updateData.resolved;
    console.log("here is the input deny data")
    console.log(updateData);
    this._update.update(updateData).subscribe(
      (response: Reimbursement) => console.log(response),
      error => console.error("Error!", error)

    );
  }
}
