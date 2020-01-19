import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenPasswordValidator } from '../../shared/password.validator';
import { crossFieldPasswordValidator } from '../../shared/crossFieldPassword.validator';
import { RegisterService } from 'src/app/services/registration/register.service';
import { IEmployee } from 'src/app/models/employee/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder, private _register: RegisterService, private router: Router) { }
  public userRoles = ["Employee", "Manager"];
  registrationForm = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(3)]],
    lname: ['', Validators.required],
    userName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4), forbiddenPasswordValidator(/pass/)]],
    confirmPassword: ['', Validators.required],
    role_id: ['']
  }, { validator: crossFieldPasswordValidator});

  ngOnInit() {
  }

  // registrationForm = new FormGroup({
  //   fname: new FormControl(''),
  //   lname: new FormControl(''),
  //   userName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   role_id: new FormControl('')
  // });

  handleSubmit(){
    //console.log(this.registrationForm.value);
    let formData = {...this.registrationForm.value};
    delete formData.confirmPassword;
    //console.log(formData);
    this._register.register(formData).subscribe(
      (response: IEmployee) => {
        //sessionStorage.setItem('currentUser', JSON.stringify(response));
        console.log(response);
        this.router.navigate(['/login']);
      },
      error => console.log("Error", error)
    );
  }
}
