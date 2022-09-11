import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingPageModule } from './Modules/landing-page/landing-page.module';
import { NavbarModule } from './Modules/navbar/navbar.module';
import { BooksModule } from './Modules/books/books.module'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookService } from './Services/Book Details/BookDetails.service';
import { BookDataService } from './Services/Book Details/BookDetailsData.service';
import { QuestionPaperModule } from './Modules/question-paper/question-paper.module';
import { questionPaperService } from './Services/QuestionPaper Details/questionPaper.service';
import {MatDialogModule} from '@angular/material/dialog';
import { PaymentModule } from './Modules/payment/payment.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,BooksModule,QuestionPaperModule,PaymentModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(BookDataService),
    LandingPageModule,
    NavbarModule
  ],
  providers: [BookService,BookDataService,questionPaperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
