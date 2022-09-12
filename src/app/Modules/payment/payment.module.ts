import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuySectionComponent } from './buy-section/buy-section.component';



@NgModule({
  declarations: [
    BuySectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BuySectionComponent]
})
export class PaymentModule { }
