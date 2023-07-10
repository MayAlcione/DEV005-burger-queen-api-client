import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs'

import { OrdersService } from 'src/app/service/orders.service';
@Component({
  selector: 'app-cook-box',
  templateUrl: './cook-box.component.html',
  styleUrls: ['./cook-box.component.css']
})
export class CookBoxComponent implements OnInit, OnDestroy{

  orders:any;
  private refreshSubscription: Subscription | undefined;

  constructor(
    private orderService: OrdersService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getOrdersToCook();

    this.orderService.refresh$.subscribe(() => {
      this.getOrdersToCook()
    })
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  getOrdersToCook() {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        const ordersPending = data.filter((order:any) => order['status']==="pending")
        const ordersDelivery = data.filter((order:any) => order['status']!=="pending")
        if(this.router.url === '/chef/delivered'){
          this.orders = ordersDelivery
        }else{
          this.orders = ordersPending
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onCheckboxChange(order:any) {
    const statusOrder = order.status === 'pending' ? order.status = 'delivered' : order.status = 'pending';

    this.orderService.changeStatus(order.id, statusOrder).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.orderService.emitRefreshEvent();

  }

  timechef(timeInit:string, timeFinal:string) {
    const dateInit = Number(new Date(timeInit));
    const dateFinal = Number(new Date(timeFinal));
    return `${Math.floor((dateFinal - dateInit)/60000)} min`;
  }
}
