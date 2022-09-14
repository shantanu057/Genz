import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuySectionComponent } from './buy-section/buy-section.component';
import {MatButtonModule} from '@angular/material/button';
import { GooglePayButtonModule } from "@google-pay/button-angular";
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    BuySectionComponent
  ],
  imports: [
    CommonModule,MatButtonModule,GooglePayButtonModule,MatCardModule,FormsModule,MatFormFieldModule,
    MatCheckboxModule,MatDialogModule,ReactiveFormsModule,MatInputModule
  
  ],
  exports:[BuySectionComponent]
})
export class PaymentModule { }
