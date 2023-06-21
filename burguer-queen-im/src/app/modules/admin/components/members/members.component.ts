import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../service/admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
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
  
  @Input() users?: User[];

  constructor(private adminService: AdminService, private http: HttpClient) {}

  ngOnInit() {
    this.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error: any) => {
        // Manejar el error de la solicitud
      }
    );
  }

  getUsers() {
    const url = '/members';
    const token = ''; // Aquí debes proporcionar el token de acceso

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Agrega el encabezado de autorización con el token
    });

    return this.http.get<User[]>(url, { headers });
  }
}
