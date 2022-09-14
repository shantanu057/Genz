import { transition, trigger, useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ibooks } from 'src/app/Models/book.module';
import { BookService } from 'src/app/Services/Book Details/BookDetails.service';
import { fadein, fadeOut } from '../display-books/Carousel/carousel.animation';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.css'],
  animations: [
    trigger("slideAnimation", [
      transition("void => *", [useAnimation(fadein, {params: { time: '1000ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1000ms' }})]),
    ])
  ]
})
export class DeleteBookComponent implements OnInit {

  viewbookname:string='';
  viewcollege:string='';
  viewcourse:string='';
  viewprice:number=0;
  viewbookauthor:string='';
  viewsellercontact:number=0;
  viewselleraddress:string='';
  viewimage:string='';
  viewsellername:string='';
  book!:Ibooks;

  constructor(private _BookService:BookService, private _ActivatedRoute:ActivatedRoute, private http:HttpClient) { }

  bookurl:string|null='';

  ngOnInit(): void {

     this.preloadImages();

    this.bookurl=this._ActivatedRoute.snapshot.paramMap.get('id');

    this.http.get<any>("http://localhost:3000/books").subscribe((bookdata:any[])=>{
      this.book=bookdata.find(x=>x.bookid==this.bookurl);
      this.viewbookname=this.book.bookname;
      this.viewcollege=this.book.collegename;
      this.viewcourse=this.book.course;
      this.viewprice=this.book.price;
      this.viewselleraddress=this.book.sellerAddress;
      this.viewbookauthor=this.book.bookauthor;
      this.viewsellercontact=this.book.sellerContact;
      this.viewsellername=this.book.sellername;
    })
}

  currentSlide = 0;
  public slides = [
    { src: "/assets/tamanna-rumee-vaTsR-ghLog-unsplash.jpg" },
    { src: "/assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg" },
    { src: "/assets/beth-jnr-NtfFqT8JBI0-unsplash.jpg" },
    { src: "/assets/siora-photography-ZslFOaqzERU-unsplash.jpg" },
    { src: "/assets/alexander-grey-O2u6gA2esAI-unsplash.jpg" }
  ];

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
}
