import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/signup/home.component';
import { ApplyComponent } from './components/apply/apply.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ReimburComponent } from './components/reimbur/reimbur.component';
import { ViewComponent } from './components/view/view.component';
import { ValidateComponent } from './components/validation/validate/validate.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'apply',
    component: ApplyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reimbursement',
    component: ReimburComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'validate',
    component: ValidateComponent
  },
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent, ApplyComponent, WelcomeComponent, LoginComponent, LogoutComponent];
