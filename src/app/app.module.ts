import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomePageModule } from './Modules/home-page/home-page.module';
import { NavbarModule } from './Modules/navbar/navbar.module';
import { BooksModule } from './Modules/books/books.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookService } from './Services/Book Details/BookDetails.service';
import { BookDataService } from './Services/Book Details/BookDetailsData.service';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { QuestionPaperModule } from './Modules/question-paper/question-paper.module';
import { questionPaperService } from './Services/QuestionPaper Details/questionPaper.service';
import {MatDialogModule} from '@angular/material/dialog';
import { PaymentModule } from './Modules/payment/payment.module';
import { DashboardModule } from './Modules/dashboard/dashboard.module';
import { LoginService } from './Services/Login Service/Login.service';
import { ProfileModule } from './Modules/profile/profile.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    HttpClientModule,
    BooksModule,
    QuestionPaperModule,
    PaymentModule,
    HttpClientInMemoryWebApiModule,
    // HttpClientInMemoryWebApiModule.forRoot(BookDataService),
    HomePageModule,
    DashboardModule,

   NavbarModule,MatDialogModule,ProfileModule

    NavbarModule

  ],
  providers: [BookService,BookDataService,LoginComponent,NavbarComponent,questionPaperService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
