import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from './Modules/home-page/home-page.module';
import { NavbarModule } from './Modules/navbar/navbar.module';
import { BooksModule } from './Modules/books/books.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookService } from './Services/Book Details/BookDetails.service';
import { BookDataService } from './Services/Book Details/BookDetailsData.service';
import { TeximateModule } from 'ngx-teximate';
import { DashboardModule } from './Modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,BooksModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(BookDataService),
    HomePageModule,
    NavbarModule,
    TeximateModule,
    DashboardModule
  ],
  providers: [BookService,BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
