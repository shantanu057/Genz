import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './Modules/authentication/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  login:string="false"
  href:string=''
  constructor(private logIn:LoginComponent,private route: Router){}
  ngOnInit(): void {
    this.logIn.subject$.subscribe((data:string)=>{
      this.login = data;
    });
  }
  title = 'Genz';

}
