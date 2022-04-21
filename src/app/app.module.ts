import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { DateCountPipe } from './date-count.pipe';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteDetailsSubmitterComponent } from './quote-details-submitter/quote-details-submitter.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteformComponent,
    DateCountPipe,
    QuotesComponent,
    QuoteDetailComponent,
    QuoteDetailsSubmitterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
