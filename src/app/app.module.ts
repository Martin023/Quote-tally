import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { DateCountPipe } from './date-count.pipe';
import { QuotesComponent } from './quotes/quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteformComponent,
    DateCountPipe,
    QuotesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
