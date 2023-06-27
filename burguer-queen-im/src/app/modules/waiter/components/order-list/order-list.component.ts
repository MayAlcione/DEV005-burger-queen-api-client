import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnChanges {

  numberCounter:number = 1;

  @Input('total') totalProductsInOrder:any = [];

  subtract(){
    return this.numberCounter--;
  }
  add(){
    return this.numberCounter++;
  }
  constructor() {
    //this.totalProductsInOrder = [];

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.totalProductsInOrder);

  }

}
