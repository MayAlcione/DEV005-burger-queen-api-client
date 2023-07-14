import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChefRoutingModule } from './chef-routing.module';
import { ChefComponent } from './chef/chef.component';
import { HeaderChefComponent } from './components/header-chef/header-chef.component';
import { CookBoxComponent } from './components/cook-box/cook-box.component';
import { ChefDeliveredComponent } from './chef-delivered/chef-delivered.component';


@NgModule({
  declarations: [
    ChefComponent,
    HeaderChefComponent,
    CookBoxComponent,
    ChefDeliveredComponent
  ],
  imports: [
    CommonModule,
    ChefRoutingModule,
    FormsModule,
  ]
})
export class ChefModule { }
