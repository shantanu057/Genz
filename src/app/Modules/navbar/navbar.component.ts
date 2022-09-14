import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:string='false'
  constructor() { }

  ngOnInit(): void {
  }
checkLoginURL(){
  this.login = 'true'
}
}
