import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotesmaker } from '../quotesmaker';
@Component({
  selector: 'app-delete-quotes',
  templateUrl: './delete-quotes.component.html',
  styleUrls: ['./delete-quotes.component.css']
})
export class DeleteQuotesComponent implements OnInit {
  @Input() quote!: Quotesmaker;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
