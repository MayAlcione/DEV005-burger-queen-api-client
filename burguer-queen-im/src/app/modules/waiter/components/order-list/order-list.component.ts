import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  numberCounter:number = 7;
  numberCounter1:number = 3;

  subtract(){
    return this.numberCounter--;
  }
  add(){
    return this.numberCounter++;
  }


}
