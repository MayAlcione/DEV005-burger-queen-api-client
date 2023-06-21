import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service';

interface User {
  id: number;
  email: string;
  role: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = []; // Variable para almacenar la lista de users

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response; // Asigna la lista de users a la variable
      },
      (error: any) => {
        // Maneja el error de la solicitud
      }
    );
  }
}
