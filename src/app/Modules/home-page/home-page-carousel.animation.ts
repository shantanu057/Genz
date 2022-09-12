import {
  style,
  animate,
  animation,
} from "@angular/animations";


export const scaleIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }), // start state
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "scale(1)" })
  )
]);

export const scaleOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0, transform: "scale(0.5)" })
  )

]);
export const fadein = animation([
  style({ opacity: 0 }), // start state
  animate('{{time}}', style({ opacity: 1 }))
]);

export const fadeout = animation([
  animate('{{time}}', style({ opacity: 0 }))
]);
