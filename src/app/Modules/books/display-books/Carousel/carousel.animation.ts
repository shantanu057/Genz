import {
  style,
  animate,
  animation,
  keyframes
} from "@angular/animations";


export const fadein = animation([
  style({ opacity: 0, transform: "fade(0.5)" }),
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "fade(1)" })
  )
]);

export const fadeOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0, transform: "fade(0.5)" })
  )
]);
