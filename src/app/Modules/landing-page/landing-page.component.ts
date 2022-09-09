import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  public slides = [
    { src: "/assets/element5-digital-OyCl7Y4y0Bk-unsplash.jpg" },
    { src: "/assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg" },
    { src: "/assets/kimberly-farmer-lUaaKCUANVI-unsplash.jpg" },
    { src: "/assets/susan-q-yin-2JIvboGLeho-unsplash.jpg" }
  ];
}
