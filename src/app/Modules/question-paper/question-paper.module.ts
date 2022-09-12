import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPaperDetailsComponent } from './question-paper-details/question-paper-details.component';



import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
  
    QuestionPaperDetailsComponent
  ],
  imports: [
    CommonModule,MatSelectModule,MatCardModule,MatButtonModule,MatDialogModule
  ],
  exports:[QuestionPaperDetailsComponent]
})
export class QuestionPaperModule { }
