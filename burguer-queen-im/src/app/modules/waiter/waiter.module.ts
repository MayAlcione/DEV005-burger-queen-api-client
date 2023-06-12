import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiterRoutingModule } from './waiter-routing.module';
import { WaiterComponent } from './waiter/waiter.component';
import { HeaderWaiterComponent } from './components/header-waiter/header-waiter.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OptionMenuComponent } from './components/option-menu/option-menu.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { WaiterMenuComponent } from './components/waiter-menu/waiter-menu.component';
import { WaiterOrderComponent } from './components/waiter-order/waiter-order.component';


@NgModule({
  declarations: [
    WaiterComponent,
    HeaderWaiterComponent,
    OrderListComponent,
    OptionMenuComponent,
    BreakfastComponent,
    WaiterMenuComponent,
    WaiterOrderComponent
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule
  ]
})
export class WaiterModule { }
