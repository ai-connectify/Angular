import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserAuthenticationModule { }
