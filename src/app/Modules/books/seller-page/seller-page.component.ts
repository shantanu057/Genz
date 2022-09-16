import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {

   constructor(private _fb:FormBuilder) { }
   sellerForm!:FormGroup;

  ngOnInit(): void {
    this.sellerForm= this._fb.group({
      bookname:['',Validators.required],
      author:['',Validators.required],
      sellername:['',Validators.required],
      number:['',Validators.required],
      price:['',Validators.required],
      sellerlocation:['',Validators.required],
      browse:['',Validators.required]

  });
  }


}
