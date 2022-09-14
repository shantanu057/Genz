import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './Carousel/carousel.component';
import { HomePageComponent } from './home-page.component';
import { NavbarModule } from '../navbar/navbar.module';
import { TeximateModule } from 'ngx-teximate';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HomePageComponent,CarouselComponent],
  imports: [
    CommonModule,NavbarModule,TeximateModule,RouterModule
  ],
  exports:[HomePageComponent,CarouselComponent]
})
export class HomePageModule { }
