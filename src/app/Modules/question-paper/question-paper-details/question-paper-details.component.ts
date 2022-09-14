import { Component, OnInit } from '@angular/core';
import { IquestionPaper } from 'src/app/Models/questionPaper.model';
import { questionPaperService } from 'src/app/Services/QuestionPaper Details/questionPaper.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-question-paper-details',
  templateUrl: './question-paper-details.component.html',
  styleUrls: ['./question-paper-details.component.css'],
  providers:[questionPaperService]
})
export class QuestionPaperDetailsComponent implements OnInit {
  Qdata:IquestionPaper[]=[];
  userSubject:IquestionPaper[]=[];
  userCollegeName:IquestionPaper[]=[];
  userCourse:IquestionPaper[]=[];
  qId:string|null='';

  constructor(private _questionPaperService:questionPaperService,
    private _route:ActivatedRoute,
    public dialog: MatDialog,
    private http:HttpClient) { }

    subjectControl = new FormControl('', Validators.required);
    collegeNameControl = new FormControl('', Validators.required);
    courseControl = new FormControl('', Validators.required);


  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  ngOnInit(): void {
    // this._questionPaperService.getQuestionPaperByApi().subscribe((questionpaperdata:IquestionPaper[])=>{
    //   this.Qdata=questionpaperdata;
    //   this.qId= this._route.snapshot.paramMap.get('id');
    // })
    this.http.get<any>("http://localhost:3000/questionPapers").subscribe((questionpaperdata:IquestionPaper[])=>{
      this.Qdata=questionpaperdata;
    })
  };

   filterQuestionPapers(){
  //   this._questionPaperService.fetchQuestionPapers(this.subjectControl.value as string,this.collegeNameControl.value as string,this.courseControl.value as string).subscribe((questionpaperdata)=>{
  //     this.Qdata=questionpaperdata as IquestionPaper[];
  //   })
  this.http.get<any>("http://localhost:3000/questionPapers").subscribe((questtionPaperData:IquestionPaper[])=>{
  this.Qdata=questtionPaperData.filter(x=>x.subjectname==this.subjectControl.value && x.collegename==this.collegeNameControl.value && x.course==this.courseControl.value)  
  if(this.Qdata.length==0){
    
  }
  })
   }

  
  // selectedSubject = 'all';
  // selectedCollegeName = 'all';
  // selectedCourse = 'all';
}
 
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'questionPaperDownload.dialog.html',
})
export class DialogElementsExampleDialog {

}

