import { Component, OnInit ,Input} from '@angular/core';
import { Quotesmaker } from '../quotesmaker';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

   
  quotes:Quotesmaker[]=[
   
     
      new Quotesmaker(2, 'You cannot afford it unless you can buy it twice.', 'Jay Z', 'Wendy Dev', new Date(2017, 6, 9),0), //Jay Z
      new Quotesmaker(3, 'You want a love that consumes you. You want passion and adventure and even a little danger.', 'Damon Salvatore', 'Elijah Gilles', new Date(2011, 8, 20),0), //Damon Salvatore
      new Quotesmaker(4, 'No problem can be solved from the same level of consciousness that created it.', 'Albert Einstein', 'Leonardo Di', new Date(2016, 3, 14),0), //Einstein
      new Quotesmaker(5, 'If you set your goals ridiculously high and it is a failure, you will fail above the success of everyone.', 'James Cameroon', 'Margot Robbie', new Date(2015, 11, 26),0),
      new Quotesmaker(6, 'The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt', 'Diana Michaels', new Date(2014, 12, 14),0), //Eleanor Roosevelt
      new Quotesmaker(7, 'Life is either a daring adventure or nothing at all.', 'Helen Keller', 'Elizabeth Wanjiru', new Date(2013, 3, 14),0), //Helen Keller
      new Quotesmaker(8, 'If life were predictable it would cease to be life and be without flavor.', 'Eleanor Roosevelt', 'Deli Ali', new Date(2012, 3, 14),0), //Eleanor Roosevelt
      new Quotesmaker(9, 'Human progress has always been driven by a sense of adventure and unconventional thinking.', 'Andre Geim', 'Linda Nyaboke', new Date(2011, 3, 14),0), //Andre Geim
      new Quotesmaker(10, 'We may sit in a library and yet be in all corners of the earth.', 'John Lubbock', 'Mr. Gold', new Date(2010, 3, 14),0), //John Lubbock
      new Quotesmaker(11, 'Logic will get you from A to B. Imagination will take you everywhere.', 'Albert Einstein', 'Erwin Schrödinger', new Date(2009, 3, 14),0),
    ];

    toggleDetails(index:any) {
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }

  toggleDetailsTwo(index:any) {
    this.quotes[index].showSubmitter = !this.quotes[index].showSubmitter;
  }

  toggleDetailsThree(index: any) {
    this.quotes[index].showCreatedDate = !this.quotes[index].showCreatedDate;
  }
  clickCounter = 0;
  dislikeCounter = 0;

  highestCounter = 0;
  bestQuote:string="";

  findHighestVotes(){
    this.highestCounter = 0;
    for(let i=0; i < this.quotes.length; i++){
      if(this.quotes[i].clickCounter>this.highestCounter){
        this.highestCounter = this.quotes[i].clickCounter;
        this.bestQuote = this.quotes[i].name;
      }
    }
  }
  countClick(quote: { clickCounter: number; }) {
    quote.clickCounter = quote.clickCounter + 1;
  }
  addNewQuote(quote: Quotesmaker) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.createdDate = new Date(quote.createdDate)
    this.quotes.push(quote)
  }

  toggleDetailsFour(index: any) {
    this.quotes[index].showName = !this.quotes[index].showName;
  }

  completeQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
