import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnChanges {

  numberCounter:number = 1;
  totalToPay:number = 0;

  @Input('total') totalProductsInOrder:Array<Product> = [];

  subtract(){
    return this.numberCounter--;
  }
  add(){
    return this.numberCounter++;
  }

  constructor() {

  }

  deleteAll() {
    while (this.totalProductsInOrder.length > 0 ) {
      this.totalProductsInOrder.pop();
    }
    //this.totalProductsInOrder = []
    this.totalToPay = 0;
  }
  deleteOne(idProduct:number) {
    this.totalProductsInOrder.splice(this.totalProductsInOrder.findIndex(elem => elem.id === idProduct), 1)
    // this.totalToPay = 0;
    this.totalProductsInOrder.filter(elem => {
      elem.id === idProduct
      this.totalToPay -= elem.price
    })
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.totalToPay = 0;
    this.totalProductsInOrder.forEach(elem => {
      this.totalToPay += elem.price
    })
    console.log(this.totalProductsInOrder);
  }

}
