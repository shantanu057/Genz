import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ibooks } from "src/app/Models/book.module"; 

 
@Injectable()
export class BookService{
    bookURL:string='api/books';
    constructor(private _http:HttpClient){}

    getBooksByApi():Observable<Ibooks[]>{
             return this._http.get<Ibooks[]>(this.bookURL); 
          }

        
    
}