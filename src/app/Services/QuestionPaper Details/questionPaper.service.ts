import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { IquestionPaper } from "src/app/Models/questionPaper.model";

 
@Injectable()
export class questionPaperService{
    questionPaper:any;
    questionPaperURL:string='api/questionPapers';
    constructor(private _http:HttpClient){}

    getQuestionPaperByApi():Observable<IquestionPaper[]>{
             return this._http.get<IquestionPaper[]>(this.questionPaperURL); 
          }

          
        resQuestionPaper:IquestionPaper[]=[]; 
        selecteduserQuestionPaper:IquestionPaper[]=[]; 
    fetchQuestionPapers(subjectName:string,college:string,course:string){
        let subject=new ReplaySubject();
        this._http.get<any[]>(this.questionPaperURL).subscribe((data:any[])=>{
            if(subjectName=="all" || college=="all" || course=="all")
            {}
            this.resQuestionPaper=data.filter(x=>x.subjectname==subjectName ||"all" &&  x.collegename==college  && x.course==course);
            subject.next(this.resQuestionPaper);
            console.log(this.resQuestionPaper);
            subject.complete();
        });
        return subject;
    }
    // fetchQuestionPaperByApi(id:string){
    //     let subject=new ReplaySubject();
    //     this._http.get<any[]>(this.questionPaperURL).subscribe((data:any[])=>{
    //         this.questionPaper=data.find(x=>x.questionPaperid==id);
    //         subject.next(this.questionPaper);
    //         subject.complete();
    //     });
    //     return subject;
    // }
    
}