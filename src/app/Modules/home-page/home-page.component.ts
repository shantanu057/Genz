import { style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {fadeOut,fadein} from './Carousel/carousel.animation'
import { fadeIn } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';
@Component({
  selector: 'app-landing-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger("slideAnimation", [
      transition("void => *", [useAnimation(fadein, {params: { time: '1000ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1000ms' }})]),
    ])
  ]
})
export class HomePageComponent implements OnInit {
  @Input() slides: any;
  currentSlide = 0;
  constructor() { }
  ngOnInit(): void {
    this.preloadImages();
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
  name =' Enter the world of Gen-Z where you can access and buy \n anything related to your studies!!';
  enterAnimation: TextAnimation = {
    animation: fadeIn,
    delay: 50,
    type: 'letter',
  };
}
