import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import ('./modules/login/login.module').then((m) => m.LoginModule) },
  { path: 'admin', loadChildren: () => import ('./modules/admin/admin.module').then((m) => m.AdminModule) },
  { path: 'waiter', loadChildren: () => import ('./modules/waiter/waiter.module').then((m) => m.WaiterModule) },
  { path: 'chef', loadChildren: () => import ('./modules/chef/chef.module').then((m) => m.ChefModule) },
  { path: 'member-modal', loadChildren: () => import ('./modules/admin/components/member-modal/member-modal.component').then((m) => m.MemberModalComponent)},
  { path: 'members',loadComponent: () => import ('./modules/admin/components/members/members.component').then((m) => m.MembersComponent) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
