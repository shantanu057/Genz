import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Modules/authentication/login/login.component';
import { SignUpComponent } from './Modules/authentication/sign-up/sign-up.component';
import { DashboardComponent } from './Modules/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent}
import { BookDetailsComponent } from './Modules/books/book-details/book-details.component';
import { DisplayBooksComponent } from './Modules/books/display-books/display-books.component';

const routes: Routes = [
  // {path:'',component:BookDetailsComponent},
  {path:'app-book-details',component:BookDetailsComponent},
  {path:'app-display-books/:id', component:DisplayBooksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
