import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MembersComponent } from './components/members/members.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'members', component: MembersComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
