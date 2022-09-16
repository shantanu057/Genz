import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsers, LoginService } from 'src/app/Services/Login Service/Login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:boolean=false
  admin:string=''
  name:string=''
  id:number=0
  constructor(private _login:LoginService,private _router:Router) { }

  ngOnInit(): void {
    console.log("Working")
    this._login.id$.subscribe((data:number)=>{
      this.id=data ;
  });
    this._login.user$.subscribe((data:boolean)=>{
      this.login = data
    });
    this._login.name$.subscribe((data:string)=>{
      this.name = data
    });
  }
  userDetails(){
    this._router.navigate(['profile',this.id]);
  }
  LogOut(){
    this._router.navigate(['']);
    this.login = false
  }
// // checkLoginURL(){
// //   setTimeout( ()=>{
// //     this.href = this.route.url
// //     console.log(this.href)
// //     }, 50)
// // }
// // random(url:string){
// //   console.log("Previous" + this.href)
// //   this.href = url
// //   console.log(this.href)
// // }
}
