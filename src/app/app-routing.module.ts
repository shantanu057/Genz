import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { SignUpComponent } from './Modules/authentication/sign-up/sign-up.component';
import { BookDetailsComponent } from './Modules/books/book-details/book-details.component';
import { BooksComponent } from './Modules/books/books.component';
import { DeleteBookComponent } from './Modules/books/delete-books/delete-books.component';
import { DisplayBooksComponent } from './Modules/books/display-books/display-books.component';
import { UpdateBookComponent } from './Modules/books/update-book/update-book.component';

import { ViewProfileComponent } from './Modules/profile/view-profile/view-profile.component';
import { QuestionPaperComponent } from './Modules/question-paper/question-paper.component';
import { QuestionPaperDetailsComponent } from './Modules/question-paper/question-paper-details/question-paper-details.component';
import { SellerPageComponent } from './Modules/books/seller-page/seller-page.component';


import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { HomePageComponent } from './Modules/home-page/home-page.component';
import { ViewProfileComponent } from './Modules/profile/view-profile/view-profile.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'books',component:BooksComponent},
  {path:'app-book-details',component:BookDetailsComponent},
  {path:'app-display-books/:id', component:DisplayBooksComponent},

  {path:'app-update-book/:id',component:UpdateBookComponent},
  {path:'app-delete-book/:id',component:DeleteBookComponent},

  {path:'app-update-book',component:UpdateBookComponent},


  {path:'app-view-profile/:id', component:ViewProfileComponent},
  {path:'app-questionpaper', component:QuestionPaperDetailsComponent},
  {path:'app-seller-page',component:SellerPageComponent},

  {path:'home-page',component:HomePageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
