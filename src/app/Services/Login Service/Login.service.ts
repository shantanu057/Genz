import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { mergeWith, Observable, Subject } from "rxjs";

export interface IUsers{
  fullname: string;
  email: string;
  password: string;
  address: string;
  mobile:string;
  clgname: string;
  clgLocation:string;
  UNS: string;
  id: number
}

@Injectable()

export class LoginService{
  user$:any = new Subject();
  admin$:any = new Subject();
  name$:any = new Subject();
  id$:any = new Subject();
  myUser:boolean=false
  name:string=''
  myAdmin:string=""
  id:number=0
  constructor(private http:HttpClient,private router:Router){}
  users():Observable<IUsers[]>{
    return this.http.get<any>("http://localhost:3000/signupUsers");
  }
  login(email:string,password:string){
    this.users().subscribe(res=>{
      const user=res.find((a:IUsers)=>{
        this.name = a.fullname
        this.id = a.id
        this.name$.next(this.name)
        this.id$.next(this.id)
        return a.email===email && a.password===password
      });
      if(user){
        this.myUser = true
        this.user$.next(this.myUser)
        alert(("Login Success!!"));
        this.router.navigate(['dashboard'])
      }
      else{
        alert("user not found!!");
      }
    });
  }
  checkAdmin(email:string,password:string){
    this.users().subscribe(res=>{
      const user=res.find((a:IUsers)=>{
        return a.email===email && a.password===password
      });
      if(user?.email=="admin@gmail.com"){
        this.myAdmin = "admin@gmail.com"
      }
    });
  }
}
