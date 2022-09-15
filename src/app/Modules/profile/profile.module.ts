import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import {MatCardModule} from '@angular/material/card';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
  import { FormsModule } from '@angular/forms';
  import { MatInputModule } from '@angular/material/input';
  import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,MatCardModule,MatFormFieldModule,FormsModule,MatInputModule,RouterModule
  ],
  exports:[ViewProfileComponent,UpdateProfileComponent]
})
export class ProfileModule { }
