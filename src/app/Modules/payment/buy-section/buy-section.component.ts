import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-section',
  templateUrl: './buy-section.component.html',
  styleUrls: ['./buy-section.component.css']
})
export class BuySectionComponent implements OnInit {


  onLoadPaymentData(event:any):void{
    console.log("Load Payment Data",event.detail);
  }


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  
}

  openDialog() {
    this.dialog.open(DialogElementsPaymentDialog);
  }
  openCodDialog(){
    this.dialog.open(DialogElementsCodDialog);
  }

}
 
@Component({
  selector: 'dialog-elements-payment-dialog',
  templateUrl: 'makePayment.dialog.html',
})
export class DialogElementsPaymentDialog {
  
  constructor(public dialog: MatDialog) { }

  close(){
    this.dialog.closeAll()
 }

}
@Component({
  selector: 'dialog-elements-cod-dialog',
  templateUrl: 'cod.dialog.html',
})
export class DialogElementsCodDialog {
  constructor(public dialog: MatDialog) { }

  close(){
    this.dialog.closeAll()
 }

}