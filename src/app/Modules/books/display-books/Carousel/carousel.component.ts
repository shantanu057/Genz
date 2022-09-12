import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadein, fadeOut } from './carousel.animation';
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(fadein, {params: { time: '1000ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1000ms' }})]),
    ])
  ]
})
export class CarouselComponent implements OnInit{
  @Input() slides: any;
  currentSlide = 0;

  constructor() {}
  ngOnInit() {
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

}
