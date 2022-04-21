import { Component, OnInit, Input } from '@angular/core';
import { Quotesmaker } from '../quotesmaker';

@Component({
  selector: 'app-date-counter',
  templateUrl: './date-counter.component.html',
  styleUrls: ['./date-counter.component.css']
})
export class DateCounterComponent implements OnInit {


  @Input() quote: Quotesmaker;

  constructor() { }

  ngOnInit(): void {
  }

}
