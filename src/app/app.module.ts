import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { DateCountPipe } from './date-count.pipe';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteDetailsSubmitterComponent } from './quote-details-submitter/quote-details-submitter.component';
import { DateCounterComponent } from './date-counter/date-counter.component';
import { DownvoteComponent } from './downvote/downvote.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { DeleteQuotesComponent } from './delete-quotes/delete-quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteformComponent,
    DateCountPipe,
    QuotesComponent,
    QuoteDetailComponent,
    QuoteDetailsSubmitterComponent,
    DateCounterComponent,
    DownvoteComponent,
    UpvoteComponent,
    DeleteQuotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
