
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   public RegistrationForm!:FormGroup;

  constructor(private _fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.RegistrationForm=this._fb.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      address:['',Validators.required],
      mobile:['',Validators.required],
      clgname:['',Validators.required],
      clgLocation:['',Validators.required],
      Uname:['',Validators.required]


    });
  }
  signUp(RegistrationForm:FormGroup){
    this.http.post<any>("http://localhost:3000/signupUsers",this.RegistrationForm.value)
    .subscribe(res=>{
      alert("Signup Successfull!!")
      this.RegistrationForm.reset();
      this.router.navigate(['login']);

    })

  }
}





