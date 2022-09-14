import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { SignUpComponent } from './Modules/authentication/sign-up/sign-up.component';
import { BookDetailsComponent } from './Modules/books/book-details/book-details.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { HomePageComponent } from './Modules/home-page/home-page.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'books',component:BooksComponent},
  {path:'app-book-details',component:BookDetailsComponent},
  {path:'app-display-books/:id', component:DisplayBooksComponent},
  {path:'app-update-book',component:UpdateBookComponent},
  {path:'app-view-profile/:id', component:ViewProfileComponent}
  {path:'home-page',component:HomePageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
