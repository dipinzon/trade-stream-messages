import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class TradeMessage {
  account: any;
  securityId: any;
  qty: any;
}

@Injectable({
  providedIn: 'root',
})
export class TradeStreamService {
  private tradeSubject = new Subject<TradeMessage>();

  get trades(): Observable<TradeMessage> {
    return this.tradeSubject.asObservable();
  }
   //
  simulateTradeMessages(): void {
    setInterval(() => {
      const randomQty = Math.floor(Math.random() * 100);
      const randomAccount = 'ACC' + Math.floor(Math.random() * 10);
      const randomSecurity = 'SEC' + Math.floor(Math.random() * 5);

      const trade: TradeMessage = {
        account: randomAccount,
        securityId: randomSecurity,
        qty: randomQty,
      };

      this.tradeSubject.next(trade);
    }, 2000); // Simulate trade messages every 2 seconds
  }
}

