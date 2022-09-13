import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Genz';
  public slides = [
    { src: "/assets/tamanna-rumee-vaTsR-ghLog-unsplash.jpg" },
    { src: "/assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg" },
    { src: "/assets/beth-jnr-NtfFqT8JBI0-unsplash.jpg" },
    { src: "/assets/siora-photography-ZslFOaqzERU-unsplash.jpg" },
    { src: "/assets/alexander-grey-O2u6gA2esAI-unsplash.jpg" }
  ];
}
