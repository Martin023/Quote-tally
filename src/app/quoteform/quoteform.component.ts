import { Component, EventEmitter, OnInit, Output ,Input} from '@angular/core';

import { Quotesmaker } from '../quotesmaker';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  
 

  
 
  newQuote = new Quotesmaker(0, "", "", "",new Date(),0);
 
  @Output() addQuote = new EventEmitter<Quotesmaker>();
  
  submitQuote() {
  
  this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
