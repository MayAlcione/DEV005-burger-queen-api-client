import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Usuario {
  id: number;
  email: string;
  role: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  
  @Input() usuarios?: Usuario[];

  constructor(private adminService: AdminService, private http: HttpClient) {}

  ngOnInit() {
    this.getUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      },
      (error: any) => {
        // Manejar el error de la solicitud
      }
    );
  }

  getUsuarios() {
    const url = '/users';
    const token = ''; // Aquí debes proporcionar el token de acceso

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Agrega el encabezado de autorización con el token
    });

    return this.http.get<Usuario[]>(url, { headers });
  }
}
