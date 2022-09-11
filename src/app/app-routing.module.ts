import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
