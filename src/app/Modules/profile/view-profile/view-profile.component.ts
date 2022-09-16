import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ibooks } from 'src/app/Models/book.module';
import { IquestionPaper } from 'src/app/Models/questionPaper.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  viewname:string='';
  viewcollege:string='';
  viewemail:string='';
  viewcontact:number=0;
  viewaddress:string='';
  userdata!:any;
  userurl:string|null='';
  data:Ibooks[]=[];

  viewqsubject:string='';
  viewqcollege:string='';
  viewqcourse:string='';
  qdata:IquestionPaper[]=[]

  constructor(private http:HttpClient, private _ActivatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {

    this.userurl=this._ActivatedRoute.snapshot.paramMap.get('id');

    this.http.get<any>("http://localhost:3000/Users").subscribe((data:any[])=>{
      this.userdata=data.find(x=>x.sellerid==this.userurl);
      this.viewname=this.userdata.name;
      this.viewcollege=this.userdata.collegename;
      this.viewemail=this.userdata.emailid;
      this.viewaddress=this.userdata.address;
      this.viewcontact=this.userdata.contactno;
      console.log(this.viewcontact);
    })


      this.http.get<any>("http://localhost:3000/books").subscribe((bookdata:Ibooks[])=>{
        this.data=bookdata.filter(x=>x.sellerid==this.userurl);
      })

      this.http.get<any>("http://localhost:3000/questionPapers").subscribe((qpaperdata:IquestionPaper[])=>{
        this.qdata=qpaperdata.filter(x=>x.sellerid==this.userurl);
      })

    }
    UpdateProfile(id:any){
      this._router.navigate(['app-update-profile',this.userurl]);
    }
    LogOut(){
      this._router.navigate(['']);
    }
  }

