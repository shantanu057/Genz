import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  StudentForm!:FormGroup;
  logIn:string='false'
  constructor(private _fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.StudentForm=this._fb.group({
      email:['',Validators.required],
      password:['',Validators.required],

    });
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.StudentForm.value.email && a.password===this.StudentForm.value.password
      });
      if(user){
        alert(("Login Success!!"));
        this.logIn = 'true'
        this.StudentForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("user not found!!");
      }
    })
  }
}



