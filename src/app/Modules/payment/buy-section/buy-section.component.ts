import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-section',
  templateUrl: './buy-section.component.html',
  styleUrls: ['./buy-section.component.css']
})
export class BuySectionComponent implements OnInit {


  // buttonColor='black';
  // buttonType='buy';
  // isCustomSize=false;
  // buttonwidth=240;
  // buttonHeight=40;
  // isTop= window===window.top;
  // paymentRequest={
  //   apiVersion:2,
  //   apiVersionMinor:0,
  //   allowedPaymentMethods:[
  //    { type:"CARD",
  //     parameters:{
  //       allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_#DS"],
  //       allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
  //     },
  //   tokenizationSpecification:{
  //     type:"PAYMENT_GATEWAY",
  //     parameters:{
  //       gateway:"example",
  //       gatewayMerchantI:"exampleGatewayMerchantId"
  //     }
  //   }
  // }
  //   ],
  //   merchantInfo:{
  //     merchant:"123456789",
  //     merchantName:"demo Merchant"
  //   },
  //   transactionInfo:{
  //     totalPriceStatus:"FINAL",
  //     totalPriceLabel:"Total",
  //     totalPrice:"100.00",
  //     currencyCode:"USD",
  //     countryCode:"US"
  //   }
  // };
  onLoadPaymentData(event:any):void{
    console.log("Load Payment Data",event.detail);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
