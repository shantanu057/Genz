import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login Service/Login.service';
import { LoginComponent } from '../authentication/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:boolean=false
  href:string=''
  constructor(private route: Router,
              private _login:LoginService) { }

  ngOnInit(): void {
    console.log("Working")
    this._login.user$.subscribe((data:boolean)=>{
      console.log(this.login)
      this.login = data
      console.log(this.login)
    })
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
