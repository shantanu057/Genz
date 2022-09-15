import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { UpdateBookComponent } from './update-book/update-book.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginService } from 'src/app/Services/Login Service/Login.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DeleteBookComponent } from './delete-books/delete-books.component';


import {MatIconModule} from '@angular/material/icon';
import { SellerPageComponent } from './seller-page/seller-page.component'



@NgModule({
  declarations: [
    BooksComponent,
    BookDetailsComponent,
    DisplayBooksComponent,
    UpdateBookComponent,

    DeleteBookComponent,
    SellerPageComponent,

  ],
  imports: [
    CommonModule,MatSelectModule,
    MatCardModule,MatButtonModule,FormsModule,
    ReactiveFormsModule,MatFormFieldModule,MatInputModule,
    RouterModule,HttpClientModule,MatIconModule,MatDialogModule
  ],
  exports:[BookDetailsComponent,DisplayBooksComponent,UpdateBookComponent,DeleteBookComponent],
  providers:[LoginService]
})
export class BooksModule { }
