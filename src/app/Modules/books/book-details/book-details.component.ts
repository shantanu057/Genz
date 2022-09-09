import { Component, OnInit } from '@angular/core';
import { Ibooks } from 'src/app/Models/book.module';
import { BookService } from 'src/app/Services/Book Details/BookDetails.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers:[]
})
export class BookDetailsComponent implements OnInit {

  data:Ibooks[]=[];
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.bookservice.getBooksByApi().subscribe((bookdata:Ibooks[])=>{
      this.data=bookdata;
    })
    };

  selectedLocation = 'all';
  selectedCollegeLocation = 'all';
  selectedCourse = 'all';
  selectedBookname = 'all';

}
