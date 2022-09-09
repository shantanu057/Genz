import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './Modules/landing-page/landing-page.component';
import { QuestionPaperComponent } from './Modules/question-paper/question-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    QuestionPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
