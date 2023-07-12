import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-order-box',
  templateUrl: './order-box.component.html',
  styleUrls: ['./order-box.component.css']
})
export class OrderBoxComponent implements OnInit, OnChanges, OnDestroy{

  orders:any;

  private refreshSubscription: Subscription | undefined;

  @Input() statusPending: boolean | undefined;
  @Input() statusServed: boolean | undefined;
  @Input() statusList: boolean | undefined;

  constructor(private ordersService: OrdersService) {

  }

  ngOnInit() {
    this.getOrdersforDelivered();

    this.ordersService.refresh$.subscribe(() => {
      this.getOrdersforDelivered()
    })
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getOrdersforDelivered();
  }

  getOrdersforDelivered():any {
    this.ordersService.getOrders().subscribe({
      next: (data) => {
        this.filterOrders(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  filterOrders(data:any) {
    const ordersPending = data.filter((order:any) => order['status']==="pending")
    const ordersList = data.filter((order:any) => order['status']!=="pending" && order['served'] === false)
    const ordersServed = data.filter((order:any) => order['served']===true)
    if(this.statusPending){
      this.orders = ordersPending
    }else if(this.statusServed){
      this.orders = ordersServed
    }else if(this.statusList){
      this.orders = ordersList
    }
  }

  onCheckboxChangeWaiter(order:any) {
    const servedOrder = order.served === false ? order.served = true : order.status = false;

    this.ordersService.changeServed(order.id, servedOrder).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.ordersService.emitRefreshEvent();
  }

  timechef(timeInit:string, timeFinal:string) {
    const dateInit = Number(new Date(timeInit));
    const dateFinal = Number(new Date(timeFinal));
    return `${Math.floor((dateFinal - dateInit)/60000)} min`;
  }
}
