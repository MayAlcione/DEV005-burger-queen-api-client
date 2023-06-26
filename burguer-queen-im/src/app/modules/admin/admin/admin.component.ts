import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service'
import { MemberModalComponent } from '../components/member-modal/member-modal.component'; 


interface User {
  id: number;
  email: string;
  role: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];

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
  }
}
