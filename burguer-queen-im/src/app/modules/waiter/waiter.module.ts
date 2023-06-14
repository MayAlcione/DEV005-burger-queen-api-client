import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiterRoutingModule } from './waiter-routing.module';
import { HeaderWaiterComponent } from './components/header-waiter/header-waiter.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OptionMenuComponent } from './components/option-menu/option-menu.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { WaiterMenuComponent } from './waiter-menu/waiter-menu.component';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';
import { OrderBoxComponent } from './components/order-box/order-box.component';


@NgModule({
  declarations: [
    HeaderWaiterComponent,
    OrderListComponent,
    OptionMenuComponent,
    BreakfastComponent,
    WaiterMenuComponent,
    WaiterOrderComponent,
    OrderBoxComponent
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule
  ]
})
export class WaiterModule { }
