
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IEmployee } from '../../models/employee/employee';
import { EmployeeService } from '../../services/employeeServices/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApplyService } from 'src/app/services/applyServices/apply.service';
import { Reimbursement } from 'src/app/models/reim/reim';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  reimTypes = ["Housing", "Travel", "Food", "Medicine", "Study", "Others"]
  currentUser = IEmployee;
  reimbursementForm: FormGroup;
  fileName = '';
  receipt: any = File;
  constructor(private fb: FormBuilder, private router: Router, private _apply: ApplyService, private cd: ChangeDetectorRef) {
    this.reimbursementForm = this.fb.group({
      amount: ['', Validators.required],
      description: ['', Validators.required],
      type_id: [''],
      file: [null, Validators.required],
      receipt: ['']
    });
  }


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



  handleSubmit() {
    const formData = {...this.reimbursementForm.value}
    delete formData.file;
    formData.author_id = this.currentUser['id'];
    formData.status_id = 2;
    // const formData = new FormData();
    // formData.append('amount', this.reimbursementForm.get('amount').value);
    // formData.append('description', this.reimbursementForm.get('description').value);
    // formData.append('type_id', this.reimbursementForm.get('type_id').value);
    // formData.append('receipt', this.reimbursementForm.get('file').value.split(",")[1]);
    // formData.append('author_id', this.currentUser['id']);
    // formData.append('status_id', "2");
    this._apply.apply(formData).subscribe(
      (response: Reimbursement) => {
        console.log(response);
        this.router.navigate(['/reimbursement']);
      },
      error => console.log("Error", error)

    )
  }


  handleFileInput(event) {
    var reader = new FileReader();
   let file = event.target.files[0];
   if (file) {
     reader.readAsDataURL(file);
    } else {
      this.reimbursementForm.get('receipt').setValue("");
    }
    reader.onloadend = () => this.reimbursementForm.get('receipt').setValue(
      reader.result
    );
  }
    

  
}
