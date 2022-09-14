import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    CommonModule,MatCardModule
  ],
  exports:[ViewProfileComponent]
})
export class ProfileModule { }
