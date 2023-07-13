import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterMenuComponent } from './waiter-menu/waiter-menu.component';
import { WaiterOrderComponent } from './waiter-order/waiter-order.component';

const routes: Routes = [
  {path: '', component: WaiterMenuComponent},
  {path: 'menu', component: WaiterMenuComponent},
  {path: 'order', component: WaiterOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
