import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ibooks } from 'src/app/Models/book.module';
import { BookService } from 'src/app/Services/Book Details/BookDetails.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

  viewbookname:string='';
  viewcollege:string='';
  viewcourse:string='';
  viewprice:number=0;
  viewsellerlocation:string='';
  viewsubject:string='';
  viewbookauthor:string='';
  viewsellercontact:string='';
  viewselleraddress:string='';
  viewimage:string='';

  booksview:Ibooks[]=[];

  constructor(private _BookService:BookService, private _ActivatedRoute:ActivatedRoute) { }

  bookurl:string|null='';

  ngOnInit(): void {
    this.bookurl=this._ActivatedRoute.snapshot.paramMap.get('id');
  }

  getbook(){
    this._BookService.fetchselectedbook(this.bookurl as string).subscribe((bookdata)=>{
    this.booksview=bookdata as Ibooks[];
  })
}

}
