import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { ChefDeliveredComponent } from './chef-delivered/chef-delivered.component';

const routes: Routes = [
  {path: '', component: ChefComponent},
  {path: 'pending', component: ChefComponent},
  {path: 'delivered', component: ChefDeliveredComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefRoutingModule { }
