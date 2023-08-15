import { Component, OnInit } from '@angular/core';
import { TradeStreamService, TradeMessage } from '../trade-stream.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trade-stream',
  templateUrl: './trade-stream.component.html',
  styleUrls: ['./trade-stream.component.css'],
})
export class TradeStreamComponent implements OnInit {
  groupedTrades: Map<string, Map<string, number>> = new Map();
  lastUpdated!: Date;

  constructor(private tradeStreamService: TradeStreamService) {}

    /*ngOnInit(): void {
    this.tradeStreamService.trades.subscribe((trade: TradeMessage) => {
      this.updateGroupedTrades(trade);
    });*/

    ngOnInit(): void {
      // Start simulating trade messages  ************
      this.tradeStreamService.simulateTradeMessages();
  
      // Subscribe to real-time trade messages
      this.tradeStreamService.trades.subscribe((trade: TradeMessage) => {
        this.updateGroupedTrades(trade);
      });
  }

  private updateGroupedTrades(trade: TradeMessage): void {
    // Update the groupedTrades map based on the incoming trade
    const account = trade.account;
    const security = trade.securityId;
    const quantity = trade.qty;

    if (!this.groupedTrades.has(account)) {
      this.groupedTrades.set(account, new Map());
    }
    
    const accountMap = this.groupedTrades.get(account)!; 

    if (!accountMap.has(security)) {
      accountMap.set(security, 0);
    }
    accountMap.set(security, accountMap.get(security) + quantity);

    this.lastUpdated = new Date();
  }
}
