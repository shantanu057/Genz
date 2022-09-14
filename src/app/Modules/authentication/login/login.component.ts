import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoginService } from 'src/app/Services/Login Service/Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  StudentForm!:FormGroup;
  logIn:string='false'
  constructor(private _fb:FormBuilder,private http:HttpClient,private router:Router,private _login:LoginService) { }

  ngOnInit(): void {
    this.StudentForm=this._fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    });
  }
  isLogin:string="false"
  users:string=''
  subject$:any = new BehaviorSubject(1);
  user$:any = new Subject();
  login(){
    this._login.login(this.StudentForm.value.email,this.StudentForm.value.password)
  }
  href:string=''
  checkDashURL(){
    setTimeout( ()=>{
      this.href = this.router.url
      console.log(this.href)
      }, 50)
  }
}



