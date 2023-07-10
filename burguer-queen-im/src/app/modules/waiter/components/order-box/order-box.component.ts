import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-order-box',
  templateUrl: './order-box.component.html',
  styleUrls: ['./order-box.component.css']
})
export class OrderBoxComponent implements OnInit{

  orders:any;

  constructor(private ordersService: OrdersService) {

  }

  ngOnInit() {
    this.getOrdersforDelivered();
  }

  getOrdersforDelivered() {
    this.ordersService.getOrders().subscribe({
      next: (data) => {
        this.orders=data;
        console.log(this.orders);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
