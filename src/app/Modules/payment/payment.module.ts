import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuySectionComponent } from './buy-section/buy-section.component';
// import { GooglePayButtonModule } from "@google-pay/button-angular";


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
