import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login Service/Login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:boolean=false
  admin:string=''
  href:string=''
  constructor(private _login:LoginService) { }

  ngOnInit(): void {
    console.log("Working")
    this._login.user$.subscribe((data:boolean)=>{
      this.login = data
    });
    
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
