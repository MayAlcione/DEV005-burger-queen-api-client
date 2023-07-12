import { Component } from '@angular/core';

@Component({
  selector: 'app-waiter-order',
  templateUrl: './waiter-order.component.html',
  styleUrls: ['./waiter-order.component.css']
})
export class WaiterOrderComponent {

  statusList:boolean;
  statusPending:boolean;
  statusServed:boolean;

  constructor() {
    this.statusList = true;
    this.statusPending = false;
    this.statusServed = false;
  }

  onOrderList(){
    this.statusList = true;
    this.statusPending = false;
    this.statusServed = false;
  }

  onOrderPending(){
    this.statusList = false;
    this.statusPending = true;
    this.statusServed = false;
  }

  onOrderServed(){
    this.statusList = false;
    this.statusPending = false;
    this.statusServed = true;
  }


}
