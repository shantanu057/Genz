import { Component, OnInit } from '@angular/core';
import { IquestionPaper } from 'src/app/Models/questionPaper.model';
import { questionPaperService } from 'src/app/Services/QuestionPaper Details/questionPaper.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-question-paper-details',
  templateUrl: './question-paper-details.component.html',
  styleUrls: ['./question-paper-details.component.css'],
  providers:[questionPaperService]
})
export class QuestionPaperDetailsComponent implements OnInit {
  Qdata:IquestionPaper[]=[];
  qId:string|null='';
  constructor(private _questionPaperService:questionPaperService,
    private _route:ActivatedRoute,public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  ngOnInit(): void {
    this._questionPaperService.getQuestionPaperByApi().subscribe((questionpaperdata:IquestionPaper[])=>{
      this.Qdata=questionpaperdata;
      this.qId= this._route.snapshot.paramMap.get('id');
    })
  };
  
  selectedSubject = 'all';
  selectedCollegeName = 'all';
  selectedCourse = 'all';
}
  
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'questionPaperDownload.dialog.html',
})
export class DialogElementsExampleDialog {

}

