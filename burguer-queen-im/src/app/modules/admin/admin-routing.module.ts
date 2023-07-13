import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MembersComponent } from './components/members/members.component';
import { MemberModalComponent } from './components/member-modal/member-modal.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member-modal', component: MemberModalComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'products-modal', component: ProductsModalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
