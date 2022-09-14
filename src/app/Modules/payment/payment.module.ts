import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuySectionComponent } from './buy-section/buy-section.component';

import {MatButtonModule} from '@angular/material/button';
import { GooglePayButtonModule } from "@google-pay/button-angular";


@NgModule({
  declarations: [
    BuySectionComponent
  ],
  imports: [
    CommonModule,MatButtonModule,GooglePayButtonModule
  ],
  exports:[BuySectionComponent]
})
export class PaymentModule { }
