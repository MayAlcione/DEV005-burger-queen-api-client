import { Component, Input } from '@angular/core';
import { CreateOrder, OneOrder } from 'src/app/shared/interfaces/createOrder';
import { SendOrderService } from 'src/app/service/send-order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  @Input('totalPrice') totalToPay:number = 0;
  nameUserValue:string = '';
  tableUserValue:string = '';
  totalSendingOrders:Array<CreateOrder> = []
  showMessage:boolean;

  @Input('total') totalProductsInOrder:Array<OneOrder> = [];

  subtract(product:OneOrder){
    if(product.qty > 1){
      product.qty -= 1
      this.totalToPay = this.totalToPay - product.product.price
    }else{
      this.deleteOne(product.product.id)
    }

  }
  add(product:OneOrder){
    product.qty += 1
    this.totalToPay = this.totalToPay + product.product.price
  }

  constructor(private sendOrderService: SendOrderService,) {
    this.showMessage = false
  }

  deleteAll() {
    while (this.totalProductsInOrder.length > 0 ) {
      this.totalProductsInOrder.pop();
    }
    this.totalToPay = 0;
  }

  deleteOne(idProduct:number) {
    this.totalProductsInOrder.filter(elem => {
      if(elem.product.id === idProduct){
        this.totalToPay = this.totalToPay - (elem.product.price*elem.qty)
      }else {
        this.totalToPay
      }
    })
    this.totalProductsInOrder.splice(this.totalProductsInOrder.findIndex(elem => elem.product.id === idProduct), 1)
  }

  sendingOrder() {
    const user = Number(localStorage.getItem('User'))

    const dataOrder = {
      userId: user,
      client: `${this.nameUserValue} - ${this.tableUserValue}`,
      products: this.totalProductsInOrder,
      status:'pending',
      dateEntry: new Date(),
      dateProcessed: ''
    };
    this.sendOrderService.sendOrder(dataOrder).subscribe({
      next: (data) => {
        this.totalSendingOrders.push(data)
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.deleteAll()
    this.nameUserValue = '';
    this.tableUserValue = '';

    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

}
