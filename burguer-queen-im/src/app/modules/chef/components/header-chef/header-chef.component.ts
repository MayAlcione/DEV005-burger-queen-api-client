import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-chef',
  templateUrl: './header-chef.component.html',
  styleUrls: ['./header-chef.component.css']
})
export class HeaderChefComponent {
  constructor(
    public router : Router,
  ){}

}
