import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MembersComponent } from './components/members/members.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'members', component: MembersComponent }
  // Otras rutas aquí...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
