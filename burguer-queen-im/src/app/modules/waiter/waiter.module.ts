import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiterRoutingModule } from './waiter-routing.module';
import { HeaderWaiterComponent } from './components/header-waiter/header-waiter.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OptionMenuComponent } from './components/option-menu/option-menu.component';
import { WaiterMenuComponent } from './waiter-menu/waiter-menu.component';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';
import { OrderBoxComponent } from './components/order-box/order-box.component';
import { ProductsMenuComponent } from './components/products-menu/products-menu.component';


@NgModule({
  declarations: [
    HeaderWaiterComponent,
    OrderListComponent,
    OptionMenuComponent,
    WaiterMenuComponent,
    WaiterOrderComponent,
    OrderBoxComponent,
    ProductsMenuComponent
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule
  ]
})
export class WaiterModule { }
