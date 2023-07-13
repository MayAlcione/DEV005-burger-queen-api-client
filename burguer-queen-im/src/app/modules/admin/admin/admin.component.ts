import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service'
import { User } from 'src/app/shared/interfaces/user';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  products: Product[] = []; 
  selectedProduct: Product | null = null; 
  showModal: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  
    this.adminService.getProduct().subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }  
}
