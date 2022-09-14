import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Modules/authentication/login/login.component';
import { SignUpComponent } from './Modules/authentication/sign-up/sign-up.component';
import { BookDetailsComponent } from './Modules/books/book-details/book-details.component';
import { BooksComponent } from './Modules/books/books.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { HomePageComponent } from './Modules/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:SignUpComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'books',component:BooksComponent},
  {path:'book-details',component:BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
