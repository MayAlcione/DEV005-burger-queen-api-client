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
    const url = 'http://localhost:8080/users';
    const token = localStorage.getItem('Token'); 

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Agrega el encabezado de autorización con el token
    });

    return this.http.get<User[]>(url, { headers });
  }

  edit(user: User): void {
    const url = `http://localhost:8080/users/${user.id}`;
    const token = localStorage.getItem('Token'); 

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Agrega el encabezado de autorización con el token
    });

    // Aquí puedes enviar la solicitud PATCH con los datos actualizados del usuario
    // Utiliza el método patch() del objeto HttpClient y pasa los datos a actualizar
    this.http.patch(url, user, { headers }).subscribe(
      () => {
        // Lógica después de la edición exitosa
        console.log('Usuario actualizado');
      },
      (error: any) => {
        // Manejar el error de la solicitud
      }
    );
  }

  eliminate(user: User): void {
    const url = `http://localhost:8080/users/${user.id}`;
    const token = localStorage.getItem('Token'); 

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Agrega el encabezado de autorización con el token
    });

    // Aquí puedes enviar la solicitud DELETE para eliminar el usuario
    // Utiliza el método delete() del objeto HttpClient
    this.http.delete(url, { headers }).subscribe(
      () => {
        // Lógica después de la eliminación exitosa
        console.log('Usuario eliminado');
      },
      (error: any) => {
        // Manejar el error de la solicitud
      }
    );
  }
}
