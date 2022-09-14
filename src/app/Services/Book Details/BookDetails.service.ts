import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Ibooks } from "src/app/Models/book.module"; 


@Injectable()
export class BookService{
    bookURL:string='api/books';
    constructor(private _http:HttpClient){}

    // getBooksByApi():Observable<Ibooks[]>{
    //          return this._http.get<Ibooks[]>(this.bookURL); 
    //       }


        // resbooks:Ibooks[]=[]; 
        // selecteduserbook:Ibooks[]=[]; 


        // fetchbooks(location:string, selectedCollegeName:string, selectedCourse:string, selectedBookName:string){
        //     let subject=new ReplaySubject();
        //     this._http.get<any[]>(this.bookURL).subscribe((data:any[])=>{
        //         if(location=="all" || selectedBookName=="all" || selectedCourse=="all" || selectedCollegeName=="all")
        //         {}
        //         this.resbooks=data.filter(x=>x.sellerAddress==location ||"all" &&  x.collegename==selectedCollegeName  && x.course==selectedCourse && x.bookname==selectedBookName);
        //         subject.next(this.resbooks);
        //         console.log(this.resbooks);
        //         subject.complete();
        //     });
        //     return subject;
        // }

        // fetchselectedbook(id:string){
        //     let subject=new ReplaySubject();
        //      this._http.get<any[]>(this.bookURL).subscribe((data:any[])=>{
        //         this.selecteduserbook=data.find(x=>x.bookid==id);
        //         subject.next(this.selecteduserbook);
        //         console.log(this.selecteduserbook);
        //         subject.complete();
        //      }); 
        //      return subject;
        //  }
        
    
}