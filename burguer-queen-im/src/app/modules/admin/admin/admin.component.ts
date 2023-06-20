import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service';

interface Usuario {
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
  usuarios: Usuario[] = []; // Variable para almacenar la lista de usuarios

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.obtenerUsuarios().subscribe(
      (response: Usuario[]) => {
        this.usuarios = response; // Asigna la lista de usuarios a la variable
      },
      (error: any) => {
        // Maneja el error de la solicitud
      }
    );
  }
}
