import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LandingPageModule } from './Modules/landing-page/landing-page.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';





import { HomePageModule } from './Modules/home-page/home-page.module';

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


import { TeximateModule } from 'ngx-teximate';
import { DashboardModule } from './Modules/dashboard/dashboard.module';


import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,MatFormFieldModule,
    BrowserAnimationsModule,MatInputModule,FormsModule,ReactiveFormsModule,AuthenticationModule,HttpClientModule

    AppRoutingModule,
    BrowserAnimationsModule,BooksModule,QuestionPaperModule,PaymentModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(BookDataService),

    HomePageModule,
    NavbarModule,
    TeximateModule,
    DashboardModule

    LandingPageModule,
    NavbarModule,MatFormFieldModule


  ],
  providers: [BookService,BookDataService,questionPaperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
