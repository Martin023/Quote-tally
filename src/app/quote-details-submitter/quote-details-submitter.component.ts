import { Component, OnInit, Input } from '@angular/core';

import { Quotesmaker } from '../quotesmaker';


@Component({
  selector: 'app-quote-details-submitter',
  templateUrl: './quote-details-submitter.component.html',
  styleUrls: ['./quote-details-submitter.component.css']
})
export class QuoteDetailsSubmitterComponent implements OnInit {

  @Input() quote: Quotesmaker;
  constructor() { }

  ngOnInit(): void {
  }

}
