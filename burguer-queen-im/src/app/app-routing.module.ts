import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginRoutingModule } from './modules/login/login-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren:() => import ('./modules/login/login.module').then((m) => m.LoginModule)},
  { path: 'admin', loadChildren:() => import ('./modules/admin/admin.module').then((m) => m.AdminModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
