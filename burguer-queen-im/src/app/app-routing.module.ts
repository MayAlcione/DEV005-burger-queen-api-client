import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { adminGuard } from './guard/admin.guard';
import { waiterGuard } from './guard/waiter.guard';
import { chefGuard } from './guard/chef.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import ('./modules/login/login.module').then((m) => m.LoginModule) },
  { path: 'admin',
    loadChildren: () => import ('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard, adminGuard],
  },
  { path: 'waiter',
    loadChildren: () => import ('./modules/waiter/waiter.module').then((m) => m.WaiterModule),
    canActivate: [authGuard, waiterGuard],
  },
  { path: 'chef',
    loadChildren: () => import ('./modules/chef/chef.module').then((m) => m.ChefModule),
    canActivate: [authGuard, chefGuard],
  },
  { path: 'member-modal',
    loadChildren: () => import ('./modules/admin/components/member-modal/member-modal.component').then((m) => m.MemberModalComponent),
    canActivate: [authGuard, adminGuard],
  },
  { path: 'members',loadComponent: () => import ('./modules/admin/components/members/members.component').then((m) => m.MembersComponent),
    canActivate: [authGuard, adminGuard],
  },
  { path: 'products',
    loadChildren: () => import ('./modules/admin/components/products/products.component').then((m) => m.ProductsComponent),
    canActivate: [authGuard, adminGuard],
  },
  { path: 'products-modal',
    loadChildren: () => import ('./modules/admin/components/products-modal/products-modal.component').then((m) => m.ProductsModalComponent),
    canActivate: [authGuard, adminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
