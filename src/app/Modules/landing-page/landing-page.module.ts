import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './Carousel/carousel.component';
import { LandingPageComponent } from './landing-page.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [LandingPageComponent,CarouselComponent],
  imports: [
    CommonModule,NavbarModule
  ],
  exports:[LandingPageComponent,CarouselComponent]
})
export class LandingPageModule { }
