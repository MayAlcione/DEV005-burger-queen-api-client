import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-waiter',
  templateUrl: './header-waiter.component.html',
  styleUrls: ['./header-waiter.component.css']
})
export class HeaderWaiterComponent {
  constructor(
    public router : Router,
  ){}
}
