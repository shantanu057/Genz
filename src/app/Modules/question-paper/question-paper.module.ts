import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPaperDetailsComponent } from './question-paper-details/question-paper-details.component';



import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { DeleteQuestionPaperComponent } from './delete-question-paper/delete-question-paper.component';
import { UpdateQuestionPaperComponent } from './update-question-paper/update-question-paper.component';


@NgModule({
  declarations: [

    QuestionPaperDetailsComponent,
      DeleteQuestionPaperComponent,
      UpdateQuestionPaperComponent
  ],
  imports: [
    CommonModule,MatSelectModule,MatCardModule,MatButtonModule,MatDialogModule,
    FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatIconModule
  ],
  exports:[QuestionPaperDetailsComponent]
})
export class QuestionPaperModule { }
