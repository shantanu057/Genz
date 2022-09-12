import { Component } from '@angular/core';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logIn:NavbarComponent){}
  title = 'Genz';
}
