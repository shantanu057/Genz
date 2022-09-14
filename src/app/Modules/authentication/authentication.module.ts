import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AuthenticationComponent,LoginComponent,SignUpComponent

  ],
  imports: [
    CommonModule,MatInputModule,FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,MatFormFieldModule,

  ],
  exports:[LoginComponent,
    SignUpComponent]
})
export class AuthenticationModule { }
