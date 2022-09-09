import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    BooksComponent
  
    BookDetailsComponent,
    DisplayBooksComponent
  ],
  imports: [
    CommonModule,MatSelectModule,
    MatCardModule,MatButtonModule
  ],
  exports:[BookDetailsComponent]
})
export class BooksModule { }
