import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TradeStreamComponent } from './trade-stream/trade-stream.component';
import { TradeStreamService } from './trade-stream.service';

@NgModule({
  declarations: [AppComponent, TradeStreamComponent],
  imports: [BrowserModule],
  providers: [TradeStreamService], // Adding TradeStreamService to providers
  bootstrap: [AppComponent],
})
export class AppModule {}
