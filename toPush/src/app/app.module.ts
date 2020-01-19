import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/signup/home.component';
import { LoginComponent } from './components/login/login.component';

// import { ApplyComponent } from './components/apply/apply.component';
import { ViewComponent } from './components/view/view.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ReimburComponent } from './components/reimbur/reimbur.component';
import { EmployeeService } from './services/employeeServices/employee.service';
//import { WelcomeComponent } from './components/welcome/welcome.component';
import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyService } from './services/applyServices/apply.service';
import { LoginService } from './services/loginServices/login.service';
import { RegisterService } from './services/registration/register.service';
import { ValidateComponent } from './components/validation/validate/validate.component';
import { DetailComponent } from './components/validation/detail/detail.component';
import { UpdateService } from './services/updateService/update.service';
import { ViewService } from './services/viewServices/view.service';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    LoginComponent,
    // ApplyComponent,
    routingComponent,
    ViewComponent,
   
    NavbarComponent,
    LogoutComponent,
    EmployeeComponent,
    ReimburComponent,
    ValidateComponent,
    DetailComponent,
    //WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [EmployeeService, ApplyService, LoginService, RegisterService, UpdateService, ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
