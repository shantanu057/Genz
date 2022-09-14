import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../authentication/login/login.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  href:string=''
  userName:string=''
  constructor(private route: Router,
              private navbar:NavbarComponent,
              private logComp:LoginComponent) { }

  ngOnInit(): void {
    this.logComp.user$.subscribe((data:string)=>{
      this.userName = data;
      console.log(this.userName)
    });
      // this.href = this.route.url
      // console.log(this.href)
      // this.navbar.random(this.href)
  }
}
