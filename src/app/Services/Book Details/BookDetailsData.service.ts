import {InMemoryDbService} from 'angular-in-memory-web-api';

export class BookDataService implements InMemoryDbService{

    constructor(){

    }   
    createDb() {
     
        let books=[
             {bookid:"1",bookname:"Fluid Mechanics", bookauthor:"James", course:"B.Tech", price:400, collegename:"Jabalpur Engineering College",sellername:"Rohan", sellerContact:3454328676, sellerAddress:"Indore", imglink:"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51Ucq9ycHmL._SX331_BO1,204,203,200_.jpg"},
        //  {bookid:"9",bookname:"DBMS", bookauthor:"James", course:"M.Tech", price:400, collegename:"IIT Delhi",sellername:"Rohan", sellerContact:3454328676, sellerAddress:"Goa", imglink:"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51Ucq9ycHmL._SX331_BO1,204,203,200_.jpg"},
        // {bookid:"7",bookname:"Maths 2", bookauthor:"James", course:"M.Tech", price:400, collegename:"Jabalpur Engineering College",sellername:"Rohan", sellerContact:3454328676, sellerAddress:"Indore", imglink:"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51Ucq9ycHmL._SX331_BO1,204,203,200_.jpg"},

        {bookid:"2",bookname:"OOPS", bookauthor:"Balaguruswami", course:"B.Tech", price:500,collegename:"IIT Delhi", sellername:"Arjun", sellerContact:5434228676, sellerAddress:"Pune", imglink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Rg98YBMJ5XF7kuF7559-n0aQfkBmagHA3w&usqp=CAU"},

        {bookid:"3",bookname:"DBMS", bookauthor:"John", course:"B.Tech", price:300, sellername:"Harshal", sellerContact:6544328676, sellerAddress:"Goa",imglink:"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51ZN4jV6j9L._SX348_BO1,204,203,200_.jpg"},

        {bookid:"4",bookname:"Computer Network", bookauthor:"Andrew", course:"B.Tech", price:500, sellername:"Yash", collegename:"NIT Bhopal", sellerContact:9876328676, sellerAddress:"Puri", imglink:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51WWOcqo1CL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"},

        {bookid:"5",bookname:"Data Structures", bookauthor:"Mathew", course:"B.Tech", price:500, sellername:"Ankita", collegename:"IIT Mumbai", sellerContact:4444328676, sellerAddress:"Mysore", imglink:"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51cAM0+OWDS._SX331_BO1,204,203,200_.jpg"},

        {bookid:"6",bookname:"Operating System", bookauthor:"James", course:"B.Tech", price:300, sellername:"Rohini", collegename:"IIIT Hyderabad", sellerContact:7774328676, sellerAddress:"Jammu", imglink:"https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/413Nwx4UyML._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"},

        ];
        let questionPapers=[
            {questionPaperid:1,subjectname:'Java',collegename:'IIT Bombay',course:'BE',qimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0jZMcr-ns9j9DAuSAnB54PVXDvjeVw0_RJQyyBidSbbosX2QzNgMKNpvTzGGAiONHaU&usqp=CAU'},
            {questionPaperid:2,subjectname:'DBMS',collegename:'IIT Kanpur',course:'B-Tech',qimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFTI71GxFG3-6lwFapTF6eEDaNzdkPG9I5A&usqp=CAU'},
            {questionPaperid:3,subjectname:'OOPS',collegename:'IIT Banglore',course:'BE',qimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFTI71GxFG3-6lwFapTF6eEDaNzdkPG9I5A&usqp=CAU'},
            {questionPaperid:4,subjectname:'Operating System',collegename:'IIT Delhi',course:'B-Tech',qimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFTI71GxFG3-6lwFapTF6eEDaNzdkPG9I5A&usqp=CAU'},
            {questionPaperid:5,subjectname:'Data Structures',collegename:'IIT Bombay',course:'BE',qimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFTI71GxFG3-6lwFapTF6eEDaNzdkPG9I5A&usqp=CAU'},
            {questionPaperid:6,subjectname:'Fluid Mechanics',collegename:'IIT Mumbai',course:'B-Tech',qimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFTI71GxFG3-6lwFapTF6eEDaNzdkPG9I5A&usqp=CAU'},
        ];
        return {books,questionPapers}

    };    
    }


