import { Component, OnInit } from '@angular/core';

import { OrdersService } from 'src/app/service/orders.service';
@Component({
  selector: 'app-cook-box',
  templateUrl: './cook-box.component.html',
  styleUrls: ['./cook-box.component.css']
})
export class CookBoxComponent implements OnInit{

  orders:any;

  constructor(private orderService: OrdersService) {

  }

  ngOnInit() {
    this.getOrdersToCook();
  }

  getOrdersToCook() {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        this.orders = data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onCheckboxChange(order:any) {
    const statusOrder = order.status === 'pending' ? order.status = 'delivered' : order.status = 'pending'

    this.orderService.changeStatus(order.id, statusOrder).subscribe({
      next: (data) => {
        console.log(data);

      },
      error: (err) => {
        console.log(err);

      }
    })


  }
}
